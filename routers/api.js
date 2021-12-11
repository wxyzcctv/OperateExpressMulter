const express = require('express');

var router = express.Router();

router.get('/',(req,res)=>{
    res.send('接口页')
})

module.exports = router;