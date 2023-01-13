const express = require('express')
const router = express.Router()
const passport = require('passport')
const constroller = require('../controlles/category')
const upload = require('../middleware/upload')


router.get('/', passport.authenticate('jwt', { session: false }), constroller.getAll)
router.get('/:id', passport.authenticate('jwt', { session: false }), constroller.getById)
router.delete('/:id', passport.authenticate('jwt', { session: false }), constroller.remove)
router.post('/', passport.authenticate('jwt', { session: false }), upload.single('image'), constroller.create)
router.patch('/:id', passport.authenticate('jwt', { session: false }), upload.single('image'), constroller.update)

module.exports = router