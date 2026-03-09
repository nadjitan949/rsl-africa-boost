const responses = require("../../messages/responses")
const User = require("../../models/tables/user.model")
const bcrypt = require("bcrypt")
const { generateSecurePassword } = require("../../secure/password.generator")
const { generateAccessToken, generateRefreshToken } = require("../../token/token.generator")
const Country = require("../../models/tables/country.model")
const Hotel = require("../../models/tables/hotel.model")

async function signUpService(req, res) {

    try {

        const { email, phone } = req.body
        const existEmail = await User.findOne({where: {email}})
        const existPhone = await User.findOne({where: {phone}})

        if(existEmail){
            return res.status(responses.HTTP_CODE.CONFLICT).json({
                success: false,
                message: "Cet email est déjà associé à un autre utilisateur",
            })
        }
        if(existPhone){
            return res.status(responses.HTTP_CODE.CONFLICT).json({
                success: false,
                message: "Cet numéro de téléphone est déjà associé à un autre utilisateur",
            })
        }

        const password = generateSecurePassword(20)
        const hashedPassword = await bcrypt.hash(password, 10)

        const newUser = await User.create({...req.body, password: hashedPassword})
        return res.status(responses.HTTP_CODE.CREATED).json({
            success: true,
            message: "Votre compte a été crée avec success. Votre mot de passe vous est envoyé par email",
            newUser,
            password
        })
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function signInService(req, res) {

    try {

        const {email, password} = req.body
        const user = await User.findOne({where: {email}})

        if(!user) {
            return res.status(responses.HTTP_CODE.UNAUTHORIZED).json({
                success: false,
                message: "Email ou mot de passe incorrect"
            })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            return res.status(responses.HTTP_CODE.UNAUTHORIZED).json({
                success: false,
                message: "Email ou mot de passe incorrect"
            })
        }

        const accessToken = await generateAccessToken(user)
        const refreshToken = await generateRefreshToken(user)

        return res.status(responses.HTTP_CODE.ACCEPTED).json({
            success: true,
            message: "Bienvenus sur votre comte",
            user,
            accessToken,
            refreshToken
        })
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

async function validateService(req, res) {

    try {

        const id = req.user.id
        const user = await User.findByPk(id, {
            include: {
                model: Country,
                model: Hotel
            }
        })

        if(!user) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Votre compte est invalide"
            })
        }

        return res.status(responses.HTTP_CODE.ACCEPTED).json({
            success: true,
            message: "Vos informations",
            user
        })
        
    } catch (error) {
        console.log("Erreur: ", error)
        return res.status(responses.HTTP_CODE.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Erreur interne survenus",
            error
        })
    }
    
}

module.exports = {signUpService, signInService, validateService}