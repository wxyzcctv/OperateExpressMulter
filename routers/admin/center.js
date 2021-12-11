const express = require('express');

var router = express.Router()

router.get("/", (req, res) => {
    res.send("管理员个人中心")
})
router.post("/changePassword", (req, res) => {
    res.send("修改密码")
})

module.exports = router