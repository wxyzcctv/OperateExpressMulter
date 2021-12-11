const express = require('express');
const router = express.Router();

const nav = require('./admin/nav');
const center = require('./admin/center')
const user = require('./admin/user');

router.get('/',(req,res)=>{
    res.send('后台管理界面')
})
router.use('/nav',nav);
router.use('/center',center);
router.use('/user',user);

module.exports = router;