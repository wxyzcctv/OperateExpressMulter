const express = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    res.render('login',{})
})

router.post('/doLogin',(req,res)=>{
    var body = req.body;
    console.log(body);
    res.send('用户名为: '+body.username)
})

module.exports = router;