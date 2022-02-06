const customerModel = require("../models/CustomerModel.js");

exports.getACustomer = (req,res)=>{

    res.json({
        message : `This is a get request with the id ${req.params.id}`
    })

};