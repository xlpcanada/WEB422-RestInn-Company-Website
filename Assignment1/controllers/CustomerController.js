const express = require('express')
const router = express.Router();

const customerService = require("../services/CustomerService.js");

const { createCustomerValidation} = require("../middleware/customerValidation.js");


router.get("/:id", customerService.getACustomer);

router.post("/register", createCustomerValidation, customerService.createACustomer);

module.exports = router;
