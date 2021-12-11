const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express()
const port = 3000;
// 引入路由模块
const login = require('./routers/login');
const api = require("./routers/api")
const index = require("./routers/index")
const admin = require("./routers/admin")

//配置模板引擎
app.engine("html", ejs.__express)
app.set("view engine", "html")
//配置静态web目录
app.use(express.static("static"))
//配置第三方中间件,此处配置的bodyParser是全局的配置，在下面的login中间件中是可以直接使用的
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 当访问/login路由时直接使用login路由模块
app.use('/login', login);
app.use('/admin', admin);
app.use('/api', api);
app.use('/', index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))