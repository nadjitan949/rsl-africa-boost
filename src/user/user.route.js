const express = require("express")
const {
    getAllUsersController,
    getOneUserController,
    addUserController,
    updateUserController,
    deleteUserController
} = require("./user.controller")

const userRoute = express.Router()

userRoute.get('/all', getAllUsersController)
userRoute.get('/details/:id', getOneUserController)
userRoute.post('/add', addUserController)
userRoute.put('/update/:id', updateUserController)
userRoute.delete('/delete/:id', deleteUserController)

module.exports = userRoute