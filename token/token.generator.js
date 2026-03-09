const responses = require("../messages/responses")
const jwt = require("jsonwebtoken")

async function generateAccessToken(user) {

    try {

        const payload = {
            id: user.id,
            email: user.email,
            type: user.type
        }

        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: process.env.ACCESS_TOKEN_EXPIR_IN }
        )

        return accessToken

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur i nterne survenu",
            error
        })
    }
}

async function generateRefreshToken(user) {

    try {

        const payload = {
            id: user.id,
            email: user.email,
            type: user.type
        }

        const refreshToken = jwt.sign(
            payload,
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIR_IN }
        )

        return refreshToken

    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur i nterne survenu",
            error
        })
    }

}

module.exports = { generateAccessToken, generateRefreshToken }