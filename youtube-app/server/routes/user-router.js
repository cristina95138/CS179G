const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.post('/user', UserCtrl.createUser)
router.delete('/user/:id', UserCtrl.deleteUser)
router.get('/user/:id', UserCtrl.getUserById)
router.get('/user/:userid', UserCtrl.getUserByUserId)
router.get('/users', UserCtrl.getUsers)
router.get('/users', UserCtrl.getRecommend)
router.put('/user/:id', UserCtrl.setPref)

module.exports = router