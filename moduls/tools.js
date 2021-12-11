const multer  = require('multer');
const mkdirp = require('mkdirp');
const sd = require('silly-datetime');
const path = require('path');

let tools = {
    multer: () => {
        const storage = multer.diskStorage({
            //配置上传的目录
            destination: async (req, file, cb) => {
                // 生成格式化日期
                let date = sd.format(new Date(), 'YYYYMMDD');
                // 获取目录路径
                let dir = path.join('static/uploads', date)
                // 生成目录，异步改同步
                await mkdirp(dir);
                cb(null, dir);
            },
            //修改上传后的文件名
            filename: function (req, file, cb) {
                //1、获取后缀名
                let extname = path.extname(file.originalname);
                //2、根据时间戳生成文件名
                cb(null, Date.now()+extname)
            }
          })
        const upload = multer({ storage: storage });
        return upload;
    },
    
    md5: ()=>{}
}

module.exports = tools;
