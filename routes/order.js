const express = require('express')
const router = express.Router()
const constroller = require('../controlles/order')
const passport = require('passport')

router.get('/', passport.authenticate('jwt', { session: false }), constroller.getAll)
router.post('/', passport.authenticate('jwt', { session: false }), constroller.create)

module.exports = router