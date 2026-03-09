const responses = require("../../messages/responses")
const {signUpService, signInService} = require("./auth.service")

async function signUpController(req, res) {

    try {

        await signUpService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function signInController(req, res) {

    try {

        await signInService(req, res)
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

module.exports = {signUpController, signInController}