const express = require("express")
const {
    getAllUsersController,
    getOneUserController,
    addUserController,
    updateUserController,
    deleteUserController
} = require("./user.controller")
const upload = require("../../middleware/multer.middleware")

const userRoute = express.Router()

userRoute.get('/all', getAllUsersController)
userRoute.get('/details/:id', getOneUserController)
userRoute.post('/add', upload.single("image"), addUserController)
userRoute.put('/update/:id', updateUserController)
userRoute.delete('/delete/:id', deleteUserController)

module.exports = userRoute