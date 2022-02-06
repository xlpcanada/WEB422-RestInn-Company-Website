const express = require('express')
const router = express.Router();

const propertyService = require("../services/PropertyService.js");




router.post("/", propertyService.createAProperty);

router.get("/", propertyService.getAllProperty);

router.get("/types", propertyService.getPropertyTypes);

router.get("/:type", propertyService.getPropertyByType);

router.get("/:location", propertyService.getPropertyByLocation);

router.get("/bestSellers", propertyService.getBestSellers);


router.get("/:id", propertyService.getPropertyById);

router.put("/:id", propertyService.updateAProperty);

router.delete("/:id", propertyService.deleteAProperty);










module.exports = router;