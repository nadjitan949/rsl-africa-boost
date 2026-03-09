const responses = require("../../messages/responses");
const {
    getAllCountryService,
    getOneCountryService,
    updateCountryService,
    addCountryService,
    deleteCountryService
} = require("./country.service");

async function getAllCountryController(req, res) {

    try {

        await getAllCountryService(req, res)

    } catch (error) {
        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Aucun pays enregistré pour le moment",
            countries
        })
    }

}

async function getOneCountryController(req, res) {

    try {

        await getOneCountryService(req, res)

    } catch (error) {
        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Aucun pays enregistré pour le moment",
            countries
        })
    }

}

async function addCountryController(req, res) {

    try {

        await addCountryService(req, res)
        
    } catch (error) {
        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Aucun pays enregistré pour le moment",
            countries
        })
    }
    
}

async function updateCountryController(req, res) {

    try {

        await updateCountryService(req, res)

    } catch (error) {
        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Aucun pays enregistré pour le moment",
            countries
        })
    }

}

async function deleteCountryController(req, res) {

    try {

        await deleteCountryService(req, res)

    } catch (error) {
        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Aucun pays enregistré pour le moment",
            countries
        })
    }

}

module.exports = {
    getAllCountryController,
    getOneCountryController,
    addCountryController,
    updateCountryController,
    deleteCountryController
}