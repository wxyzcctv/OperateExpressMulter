const express = require('express');
const router = express.Router();
const tools = require('../../moduls/tools')

router.get('/',(req,res)=>{
    res.send('导航列表')
})

router.get('/add',(req,res)=>{
    res.render('admin/nav/add')
})

router.get('/edite',(req,res)=>{
    res.send('编辑导航')
})

router.post('/doAdd',tools.multer().single('pic'),(req,res)=>{
    res.send({
        files: req.files,
        body: req.body
    })
})

router.post('/doEdite',(req,res)=>{
    res.send('执行编辑')
})

module.exports = router;