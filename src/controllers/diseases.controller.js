const ApiError = require("../api-error");
const makeDiseasesService = require("../services/diseases.service");

async function getAllDiseases(req, res, next) {
    let riceDiseases = [];

    try {
        const riceDiseaseService = makeDiseasesService();
        riceDiseases = await riceDiseaseService.getAllDiseases(req.query);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                "An error occurred while retrieving rice diseases"
            )
        );
    }
    return res.send(riceDiseases);
}

async function getDisease(req, res, next) {
    try {
        const riceDiseaseService = makeDiseasesService();
        const riceDisease = await riceDiseaseService.getDiseaseById(
            req.params.id
        );
        if (!riceDisease) {
            return next(new ApiError(404, "Contact not found"));
        }
        return res.send(riceDisease);
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(
                500,
                `Error retrieving disease with id=${req.params.id}`
            )
        );
    }
}

module.exports = {
    getAllDiseases,
    getDisease,
};
