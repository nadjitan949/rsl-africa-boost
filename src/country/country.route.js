const express = require("express")
const {
    getAllCountryController,
    getOneCountryController,
    addCountryController,
    updateCountryController,
    deleteCountryController
} = require("./country.controller")
const upload = require("../../middleware/multer.middleware")

const countryRoute = express.Router()

countryRoute.get('/all', getAllCountryController)
countryRoute.get('/details/:id', getOneCountryController)
countryRoute.post('/add', upload.single("flag"), addCountryController)
countryRoute.put('/update/:id', upload.single("flag"), updateCountryController)
countryRoute.delete('/delete/:id', deleteCountryController)

module.exports = countryRoute