const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/', (req, res) => {
    console.log(req.ip)
    res.sendFile(path.join(__dirname, '../client-build/index.html'))
})

module.exports = router
