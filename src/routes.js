const express = require("express");
const routes = express.Router();

const PlanetController = require("../Controller/PlanetController");
const SateliteController = require("../Controller/SateliteController");
const CapController = require("../Controller/CapController");
const SpaceshipController = require("../controller/SpaceshipController");


// ROTAS DO PLANET
routes.post("/planets", PlanetController.store);
routes.get("/planets", PlanetController.index);
routes.put("/planets/:id", PlanetController.put);
routes.delete("/planets/:id", PlanetController.delete);

// ROTAS DO SATELITE
routes.post("/planet/:planetId/satelites", SateliteController.store);
routes.get("/planet/:planetId/satelites", SateliteController.index);

// ROTAS DO CAP
routes.post("/cap", CapController.store);
routes.get("/cap", CapController.index);

// ROTAS SPACESHIP
routes.post("/caps/:capId/spaceships", SpaceshipController.store);
routes.get("/caps/:capId/spaceships", SpaceshipController.index);


module.exports = routes;