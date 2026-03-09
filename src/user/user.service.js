const responses = require("../../messages/responses")
const Country = require("../../models/tables/country.model")
const Hotel = require("../../models/tables/hotel.model")
const User = require("../../models/tables/user.model")
const { generateSecurePassword } = require("../../secure/password.generator")
const bcrypt = require("bcrypt")

async function getAllUsersService(req, res) {

    try {

        const users = await User.findAll(
            {
                include: {
                    model: Country,
                    model: Hotel
                }
            }
        )

        if (users.length === 0) {
            return res.status(responses.HTTP_CODE.OK).json({
                success: false,
                message: "Aucun utilisateur enregistré pour le moment",
                users
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Liste des utilisateurs",
            users
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

async function getOneUserService(req, res) {
    try {

        const id = req.params.id
        const user = await User.findByPk(id,
            {
                include: {
                    model: Country,
                    model: Hotel
                }
            }
        )

        if (!user) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Utilisateur introuvable"
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Détail de l'utilisateur",
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

async function addUserService(req, res) {

    try {

        const { email, phone } = req.body
        const existEmail = await User.findOne({ where: { email } })
        const existPhone = await User.findOne({ where: { phone } })

        if (existEmail) {
            return res.status(responses.HTTP_CODE.CONFLICT).json({
                success: true,
                message: "Cet email est déjà associé à un autre utilisateur"
            })
        }

        if (existPhone) {
            return res.status(responses.HTTP_CODE.CONFLICT).json({
                success: true,
                message: "Cet numero de téléphone appartient déjà à un autre utilisateur"
            })
        }

        const password = generateSecurePassword(20)
        const hashedPassword = bcrypt.hash(password, 10)

        const newUser = await User.create({ ...req.body, password: hashedPassword })

        return res.status(responses.HTTP_CODE.CREATED).json({
            success: true,
            message: "Nouvelle utilisateur crée avec succes. Son mot de passe lui est envoyé sur son email",
            newUser
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

async function updateUserService(req, res) {

    try {

        const id = req.params.id
        const user = await User.findByPk(id)

        if (!user) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Utilisateur introuvable"
            })
        }

        await user.update(req.body)

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Utilisateur mis à jour avec succes",
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

async function deleteUserService(req, res) {

    try {

        const id = req.params.id
        const user = await User.findByPk(id)

        if (!user) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Utilisateur introuvable"
            })
        }

        await user.destroy()

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Utilisateur supprimé"
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

module.exports = {
    getAllUsersService,
    getOneUserService,
    addUserService,
    updateUserService,
    deleteUserService
}