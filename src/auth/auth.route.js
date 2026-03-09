const express = require("express")
const {signUpController, signInController, validateController} = require("./auth.controller")
const authMiddleware = require("../../middleware/authMiddleware")

const authRoute = express.Router()

authRoute.get('/profile', authMiddleware, validateController)

authRoute.post('/sign-up', signUpController)
authRoute.post('/sign-in', signInController)

module.exports = authRoute