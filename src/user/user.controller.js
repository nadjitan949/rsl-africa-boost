const responses = require("../../messages/responses")
const {
    getAllUsersService,
    getOneUserService,
    addUserService,
    updateUserService,
    deleteUserService
} = require("./user.service")

async function getAllUsersController(req, res) {

    try {

        await getAllUsersService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }

}

async function getOneUserController(req, res) {

    try {

        await getOneUserService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }

}

async function addUserController(req, res) {

    try {

        await addUserService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }

}

async function updateUserController(req, res) {

    try {

        await updateUserService(req, res)

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }

}

async function deleteUserController(req, res) {

    try {

        await deleteUserService(req, res)

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
    getAllUsersController,
    getOneUserController,
    addUserController,
    updateUserController,
    deleteUserController
}