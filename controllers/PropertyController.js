const express = require('express')
const router = express.Router();

const propertyService = require("../services/PropertyService.js");
const { createPropertyValidation} = require("../middleware/propertyValidation.js");



router.post("/", createPropertyValidation, propertyService.createAProperty);

router.get("/", propertyService.getAllProperty);

router.get("/types", propertyService.getPropertyTypes);


router.get("/:id", propertyService.getAproperty);

router.put("/:id", propertyService.updateAProperty);

router.delete("/:id", propertyService.deleteAProperty);










module.exports = router;