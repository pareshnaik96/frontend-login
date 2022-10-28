const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')


router.get('/get',userController.getUser)
router.post('/post',userController.postUser)
router.get('/get/:id',userController.getUserId)
router.put('/update/:id',userController.updateUser)
router.delete('/remove/:id',userController.deleteUser)


module.exports = router;