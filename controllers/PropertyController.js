const express = require('express')
const router = express.Router();

const PropertyService = require("../services/PropertyService.js");

// middleware that is specific to this router


router.get("/", PropertyService.getAllProperty);

router.get("/:id", PropertyService.getAProperty);

router.post("/", PropertyService.createAProperty);

router.put("/:id", PropertyService.updateAProperty);

router.delete("/:id", PropertyService.deleteAProperty);



router.post("/types", PropertyService.getPropertyTypes);

router.post("/:type", PropertyService.getPropertyByType);

router.post("/:location", PropertyService.getPropertyByLocation);

router.post("/bestSellers", PropertyService.getBestSellers);








module.exports = router;