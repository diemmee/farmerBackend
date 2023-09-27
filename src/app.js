const express = require("express");
const cors = require("cors");
const riceDiseasesRouter = require("./routes/diseases.router");
const {
    resourceNotFound,
    handleError,
} = require("./controllers/errors.controllers");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "weo come" });
});

app.use("/api/diseases", riceDiseasesRouter);

app.use(handleError);
app.use(resourceNotFound);

module.exports = app;
