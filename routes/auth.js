const express = require('express')
const router = express.Router()
const constroller = require('../controlles/auth')


router.post('/login', constroller.login)
router.post('/register', constroller.register)

module.exports = router