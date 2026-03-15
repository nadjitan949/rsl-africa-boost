const responses = require("../../messages/responses");
const Country = require("../../models/tables/country.model");
const Hotel = require("../../models/tables/hotel.model");
const User = require("../../models/tables/user.model");

async function getAllHotelsService(req, res) {

    try {

        const hotels = await Hotel.findAll({
            include: [
                {
                    model: Country,
                    as: "country"
                },
                {
                    model: User,
                    as: "users"
                },
            ]
        })

        if (hotels.length === 0) {
            return res.status(responses.HTTP_CODE.OK).json({
                success: true,
                message: "Aucun hotel enregisté pour le moment",
                hotels
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Liste des hotels",
            hotels
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

async function getOneHotelService(req, res) {

    try {

        const id = req.params.id
        const hotel = await Hotel.findByPk(id, {
            include: [
                {
                    model: Country,
                    as: "country"
                },
                {
                    model: User,
                    as: "users"
                },
            ]
        })

        if (!hotel) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Hotel introuvable"
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Detail de l'hotel",
            hotel
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

async function addHotelService(req, res) {

    try {

        const newHotel = await Hotel.create(req.body)

        return res.status(responses.HTTP_CODE.CREATED).json({
            success: true,
            message: "Nouvelle hotel crée avec succes",
            newHotel
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

async function updateHotelService(req, res) {

    try {

        const id = req.params.id
        const hotel = await Hotel.findByPk(id)

        if (!hotel) {
            return res.status(responses.HTTP_CODE.OK).json({
                success: false,
                message: "Hotel introuvable"
            })
        }

        await hotel.update(req.body)

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Hotel mis à jour avec succes",
            hotel
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

async function deleteHotelService(req, res) {

    try {

        const id = req.params.id
        const hotel = await Hotel.findByPk(id)

        if (!hotel) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Hotel introuvable"
            })
        }

        await hotel.destroy()

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Hotel supprimé avec succes"
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
    getAllHotelsService,
    getOneHotelService,
    addHotelService,
    updateHotelService,
    deleteHotelService
}