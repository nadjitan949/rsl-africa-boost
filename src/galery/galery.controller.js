const responses = require("../../messages/responses")
const {
    getAllGaleriesService,
    getOneGaleryService,
    addGaleryService,
    updateGaleryService,
    deleteGaleryService
} = require("./galery.service")

async function getAllGaleriesController(req, res) {

    try {

        await getAllGaleriesService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }

}

async function getOneGaleryController(req, res) {

    try {

        await getOneGaleryService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function addGaleryController(req, res) {

    try {

        await addGaleryService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function updateGaleryController(req, res) {

    try {

        await updateGaleryService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function deleteGaleryController(req, res) {

    try {

        await deleteGaleryService(req, res)
        
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
    getAllGaleriesController,
    getOneGaleryController,
    addGaleryController,
    updateGaleryController,
    deleteGaleryController
}