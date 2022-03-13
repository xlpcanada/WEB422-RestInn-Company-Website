const express = require('express')
const router = express.Router();

const customerService = require("../services/CustomerService.js");

const { createCustomerValidation} = require("../middleware/customerValidation.js");

router.post("/register", createCustomerValidation, customerService.createACustomer);
router.get("/:id", customerService.getACustomer);



module.exports = router;
