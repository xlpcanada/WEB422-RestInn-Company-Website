const express = require('express')
const router = express.Router();

const customerService = require("../services/CustomerService.js");




router.get("/:id", customerService.getACustomer);

router.post("/register", customerService.createACustomer);

module.exports = router;
