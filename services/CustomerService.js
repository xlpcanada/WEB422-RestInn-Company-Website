const customerModel = require("../models/CustomerModel.js");

//to receive request body and response data in json format
app.use(express.json());

//to handle regular text form data and access data on req.body
app.use(express.urlencoded({extended:true}));




exports.getCustomerRegisterPage = ()=>{
    res.json({
        messsage: `Customer register page.`
    })
};




exports.createACustomer = async(req,res)=>{


    if(req.body.password !== req.body.password2){
        res.json({
            message:"Passwords do not match"
        });
    }

    else if(req.body.firstName == null || req.body.lastName == null
              ||req.body.email == null || req.body.password == null){
        res.json({
            message:"Mandatory field is empty"
        });
    }
    

    else{
        const customer = new customerModel(req.body);

        bcrypt.genSalt(10)  
        .then(salt=>bcrypt.hash(req.body.password, salt)) 
        .then(hash=>{
            customer.password = hash;
            customer.password2 = hash;

            customer.save()
            .then(newCustomer=>{
                res.json({
                    message: "A customer was successfully created",
                    data: newCustomer
                })
            })
            .catch(err=>{
                res.status(500).json({
                    message:`There was an error creating the customer`
                  })                                       
            })
        })    
        .catch(err=>{
            res.status(500).json({
                message: `There was an error encrypting the password`
            })
        })

    }

};





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