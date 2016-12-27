var bodyParser = require('body-parser')
var router = require('express').Router()

router.use(require('../auth'))
router.use(bodyParser.json())

router.use('/api/posts', require('./api/posts'))
router.use('/api/sessions', require('./api/sessions'))
router.use('/api/users', require('./api/users'))
router.use('/', require('./static'))

module.exports = router
