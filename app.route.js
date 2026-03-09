const express = require("express")
const authRoute = require("./src/auth/auth.route")
const userRoute = require("./src/user/user.route")

const appRoute = express.Router()

appRoute.use('/auth', authRoute)
appRoute.use('/users', userRoute)

module.exports = appRoute