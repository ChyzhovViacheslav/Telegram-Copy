const Router = require('express')
const router = new Router()
const controller = require('../controllers/usersController')

router.get('/users', controller.allUsers)

module.exports = router