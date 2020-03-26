const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfillerController = require("./controllers/ProfillerController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfillerController.index);

routes.get("/incidents", IncidentController.index);
routes.get("/incidents/:id", IncidentController.show);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
