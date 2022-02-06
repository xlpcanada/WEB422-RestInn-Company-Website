const customerModel = require("../models/CustomerModel.js");

//to receive request body and response data in json format
app.use(express.json());



exports.getCustomerById = (req,res)=>{

    customerModel.findById(req.params.id)
    .then(customer=>{

        if(customer){
            res.joson({
                message : `Customer with the id ${req.params.id}`,
                data: customer
            })
        }
        else{
            res.status(404).json({
                message: `There is no such customer with the id ${req.params.id} in our database.`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:err
          })
    })

};