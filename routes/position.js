const express = require('express')
const router = express.Router()
const constroller = require('../controlles/position')
const passport = require('passport')

router.get('/:categoryId', passport.authenticate('jwt', { session: false }), constroller.getByCategoryId)
router.post('/', passport.authenticate('jwt', { session: false }), constroller.create)
router.patch('/:id', passport.authenticate('jwt', { session: false }), constroller.update)
router.delete('/:id', passport.authenticate('jwt', { session: false }), constroller.remove)

module.exports = router