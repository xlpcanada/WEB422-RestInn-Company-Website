const express = require('express')
const router = express.Router();

const customerService = require("../services/CustomerService.js");




router.get("/:id", customerService.getCustomerById);
router.get("/register", customerService.getCustomerRegisterPage)
router.post("/register", customerService.createACustomer);

module.exports = router;
