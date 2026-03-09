const responses = require("../../messages/responses")
const Galery = require("../../models/tables/galery.model")

async function getAllGaleriesService(req, res) {

    try {

        const galeries = await Galery.findAll()
        if(galeries.length === 0) {
            return res.status(responses.HTTP_CODE.OK).json({
                success: true,
                message: "Aucune image pour le moment",
                galeries
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Liste des images galeries",
            galeries
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

async function getOneGaleryService(req, res) {

    try {

        const id = req.params.id
        const galery = await Galery.findByPk(id)
        if(!galery) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Image introuvable"
            })
        }

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Detail de l'image",
            galery
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

async function addGaleryService(req, res) {

    try {

        const newGalery = await Galery.create(req.body)

        return res.status(responses.HTTP_CODE.CREATED).json({
            success: true,
            message: "Nouveau média ajouté",
            newGalery
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

async function updateGaleryService(req, res) {

    try {

        const id = req.params.id
        const galery = await Galery.findByPk(id)

        if(!galery) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Image galerie introuvable"
            })
        }

        await galery.update(req.body)

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Media mis à jour aavec succes",
            galery
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

async function deleteGaleryService(req, res) {

    try {

        const id = req.params.id
        const galery = await Galery.findByPk(id)

        if(!galery) {
            return res.status(responses.HTTP_CODE.NOT_FOUND).json({
                success: false,
                message: "Média galerie introuvable"
            })
        }

        await galery.destroy()

        return res.status(responses.HTTP_CODE.OK).json({
            success: true,
            message: "Media supprimé avec succes"
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
    getAllGaleriesService,
    getOneGaleryService,
    addGaleryService,
    updateGaleryService,
    deleteGaleryService
}