const responses = require("../../messages/responses")
const Country = require("../../models/tables/country.model")
const Hotel = require("../../models/tables/hotel.model")
const User = require("../../models/tables/user.model")

async function getAllCountryService(req, res) {

    try {

        const countries = await Country.findAll({
            include: {
                model: User,
                model: Hotel
            }
        })

        if (countries.length === 0) {
            return res.status(responses.HTTP_CODE.OK).json({
                success: true,
                message: "Aucun pays enregistré pour le moment",
                countries
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Liste des pays avec et les délégations",
            countries
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

async function getOneCountryService(req, res) {

    try {

        const id = req.params.id
        const country = await Country.findByPk(id)

        if (!country) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Pays introuvable"
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Details du pays",
            country
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

async function addCountryService(req, res) {

    try {

        const { name } = req.body
        const existCountry = await Country.findOne({ where: { name } })

        if (existCountry) {
            return res.status(responses.HTTP_CODE.CONFLICT).json({
                success: true,
                message: "Cet pays exist déjà",
                existCountry
            })
        }

        const newCountry = await Country.create(req.body)

        return res.status(responses.HTTP_CODE.CREATED).json({
            success: true,
            message: "Nouveau pays ajouté avec succes",
            newCountry
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

async function updateCountryService(req, res) {

    try {

        const id = req.params.id
        const country = await Country.findByPk(id)

        if (!country) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Pays introuvable"
            })
        }

        await country.update(req.body)

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Pays mis à jour avec succes",
            country
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

async function deleteCountryService(req, res) {

    try {

        const id = req.params.id
        const country = await Country.findByPk(id)

        if (!country) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Pays introuvable"
            })
        }

        await country.destroy()

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Pays supprimé avec succes"
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
    getAllCountryService,
    getOneCountryService,
    addCountryService,
    updateCountryService,
    deleteCountryService
}