const express = require('express')
const router = express.Router();

const CustomerService = require("../services/CustomerService.js");




router.get("/:id", CustomerService.getCustomerById);


module.exports = router;
