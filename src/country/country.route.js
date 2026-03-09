const express = require("express")
const {
    getAllCountryController,
    getOneCountryController,
    addCountryController,
    updateCountryController,
    deleteCountryController
} = require("./country.controller")

const countryRoute = express.Router()

countryRoute.get('/all', getAllCountryController)
countryRoute.get('/details/:id', getOneCountryController)
countryRoute.post('/add', addCountryController)
countryRoute.put('/update/:id', updateCountryController)
countryRoute.delete('/delete/:id', deleteCountryController)

module.exports = countryRoute