const express = require('express')
const router = express.Router();

const CustomerService = require("../services/CustomerService.js");

// middleware that is specific to this router


router.get("/:id", CustomerService.getACustomer);


module.exports = router;
