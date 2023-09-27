const express = require("express");
const riceDiseasesController = require("../controllers/diseases.controller");
const { methodNotAllowed } = require("../controllers/errors.controllers");

const router = express.Router();

router
    .route("/")
    .get(riceDiseasesController.getAllDiseases)
    .all(methodNotAllowed);

module.exports = router;
