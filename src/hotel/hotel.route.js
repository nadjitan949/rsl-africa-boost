const express = require("express")
const {
    getAllHotelsController,
    getOneHotelController,
    addHotelController,
    updateHotelController,
    deleteHotelController
} = require("./hotel.controller")

const hotelRoute = express.Router()

hotelRoute.get('/all', getAllHotelsController)
hotelRoute.get('/details/:id', getOneHotelController)
hotelRoute.post('/add', addHotelController)
hotelRoute.put('/update/:id', updateHotelController)
hotelRoute.delete('/delete/:id', deleteHotelController)

module.exports = hotelRoute