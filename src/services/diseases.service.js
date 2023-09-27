const knex = require("../database/knex");

function makeDiseasesService() {
    // function readDisease(payload) {
    //     const diseasesInfo = {
    //         disName: payload.disName,
    //         scientName: payload.scientName,
    //     };
    //     // Remove undefined fields
    //     Object.keys(diseasesInfo).forEach(
    //         (key) => diseasesInfo[key] === undefined && delete diseasesInfo[key]
    //     );
    //     return diseasesInfo;
    // }

    async function getAllDiseases(query) {
        const { disName } = query;
        return knex("diseases")
            .where((builder) => {
                if (disName) {
                    builder.where("disName", "like", `${disName}`);
                }
            })
            .select("*");
    }

    return { getAllDiseases };
}

module.exports = makeDiseasesService;
