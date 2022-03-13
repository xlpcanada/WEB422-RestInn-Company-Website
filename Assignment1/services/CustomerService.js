const bcrypt = require('bcryptjs');
const customerModel = require("../models/CustomerModel.js");
const express = require("express");
const app = express();


//to receive request body and response data in json format
app.use(express.json());

//to handle regular text form data and access data on req.body
app.use(express.urlencoded({extended:true}));




exports.createACustomer = async(req,res)=>{


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

    

};





exports.getACustomer =  (req,res)=>{

    customerModel.findById(req.params.id)
    .then(customer=>{
      
        if(customer){
            res.json({
                message : `customer with the id ${req.params.id}`,
                result : customer
            })
        }

        else{
            res.status(404).json({
                message : `There is no customer in our database with the id ${req.params.id}`
            })
        }
    })

    .catch(err=>{
        if(err.name==="CastError" && err.kind==="ObjectId"){

            res.status(404).json({
                message : `There is no customer in our database with the id ${req.params.id}`
            })
        }
        else{
            res.status(500).json({
                message :err
            })
        }
    })

};