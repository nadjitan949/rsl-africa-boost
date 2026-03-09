const responses = require("../../messages/responses")
const {
    getAllHotelsService,
    getOneHotelService,
    addHotelService,
    updateHotelService,
    deleteHotelService
} = require("./hotel.service")

async function getAllHotelsController(req, res) {
    try {

        await getAllHotelsService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
}

async function getOneHotelController(req, res) {
    try {

        await getOneHotelService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
}

async function addHotelController(req, res) {

    try {

        await addHotelService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function updateHotelController(req, res) {

    try {

        await updateHotelService(req, res)
        
    } catch (error) {
       console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        }) 
    }
    
}

async function deleteHotelController(req, res) {

    try {

        await deleteHotelService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

module.exports = {
    getAllHotelsController,
    getOneHotelController,
    addHotelController,
    updateHotelController,
    deleteHotelController
}