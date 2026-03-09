const express = require("express")
const {
    getAllGaleriesController,
    getOneGaleryController,
    addGaleryController,
    updateGaleryController,
    deleteGaleryController
} = require("./galery.controller")

const galeryRoute = express.Router()

galeryRoute.get('/all', getAllGaleriesController)
galeryRoute.get('/details/:id', getOneGaleryController)
galeryRoute.post('/add', addGaleryController)
galeryRoute.put('/update/:id', updateGaleryController)
galeryRoute.delete('/delete/:id', deleteGaleryController)

module.exports = galeryRoute