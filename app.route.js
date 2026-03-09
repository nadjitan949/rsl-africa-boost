const express = require("express")
const authRoute = require("./src/auth/auth.route")
const userRoute = require("./src/user/user.route")
const countryRoute = require("./src/country/country.route")
const hotelRoute = require("./src/hotel/hotel.route")

const appRoute = express.Router()

appRoute.use('/auth', authRoute)
appRoute.use('/users', userRoute)
appRoute.use('/countries', countryRoute)
appRoute.use('/hotels', hotelRoute)

module.exports = appRoute