const express = require('express')
const router = express.Router()
const constroller = require('../controlles/analytics')


router.get('/overview', constroller.overview)
router.get('/analytics', constroller.analytics)

module.exports = router