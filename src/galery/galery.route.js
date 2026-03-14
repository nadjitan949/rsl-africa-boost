const express = require("express")
const {
    getAllGaleriesController,
    getOneGaleryController,
    addGaleryController,
    updateGaleryController,
    deleteGaleryController
} = require("./galery.controller")
const upload = require("../../middleware/multer.middleware")

const galeryRoute = express.Router()

galeryRoute.get('/all', getAllGaleriesController)
galeryRoute.get('/details/:id', getOneGaleryController)
galeryRoute.post('/add', upload.single("media"), addGaleryController)
galeryRoute.put('/update/:id', upload.single("media"), updateGaleryController)
galeryRoute.delete('/delete/:id', deleteGaleryController)

module.exports = galeryRoute