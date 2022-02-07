
const propertyModel = require("../models/PropertyModel.js");
const express = require("express");
const app = express();


//to receive request body and response data in json format
app.use(express.json());

//to handle regular text form data and access data on req.body
app.use(express.urlencoded({extended:true}));


//----------------------service functions----------------------------------

exports.createAProperty = async(req,res)=>{

    if(req.body.propertyTitle == null || req.body.propertyRentalPrice == null
        ||req.body.propertyType == null){

        res.json({
            message:"Mandatory field is empty"
        });        
    }
    else{
        const property = new propertyModel(req.body);

        property.save()
        .then(newProperty=>{
            res.json({
                message: "A property was successfully created.",
                data: newProperty
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:err
            })
        })

    }
};



exports.getAllProperty = async(req,res)=>{

    const queryStringObj = {};

    if(req.query.propertyType)
    {
        queryStringObj.propertyType = req.query.propertyType
    }
 
    if(req.query.location)
    {
        queryStringObj.location = req.query.location
    }

    if(req.query.bestSellers)
    {
        queryStringObj.bestSellers = req.query.bestSellers
    }

    try
    {
        const properties = await propertyModel.find(queryStringObj) //async operaiton (non-blocking)
     
        res.json({
            message : "A List of property",
            results : properties,
            totalProperties : properties.length
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            message :err
        })
    }
};



exports.getPropertyTypes = async(req,res)=>{

    try
    {
        const properties = await propertyModel.find({},'propertyType') //async operaiton (non-blocking)
     
        res.json({
            message : "A List of property types",
            results : properties,
            totalProperties : properties.length
        })
        
    }
    catch(err)
    {
        res.status(500).json({
            message :err
        })
    }
};

  


exports.getAproperty =  (req,res)=>{

    propertyModel.findById(req.params.id)
    .then(property=>{

        if(property){
            res.json({

                message : `property with the id ${req.params.id}`,
                result : property
            })
        }

        else{
            res.status(404).json({
                message : `There is no property in our database with the id ${req.params.id}`
            })
        }
    })

    .catch(err=>{

        if(err.name==="CastError" && err.kind==="ObjectId")
        {
            res.status(404).json({
                message : `There is no property in our database with the id ${req.params.id}`
            })
        }

        else
        {
            res.status(500).json({
                message :err
            })
        }
    })
};




exports.updateAProperty = (req,res)=>{

    propertyModel.findByIdAndUpdate(req.params.id, req.body, {new :true})
    .then(property=>{

        if(property){
            res.json({
                message : `The property with the id ${req.params.id} was updated`,
                result : property
            })

        }

        else{
            res.status(404).json({
                message : `The property with ID ${req.params.id} was not found`
            })
        }

    })
    .catch(err=>{
        res.status(500).json({
            message :err
        })
    })
};



exports.deleteAProperty = (req,res)=>{

    propertyModel.findByIdAndRemove(req.params.id)
    .then((property)=>{

        if(property)
        {
            res.json({
                message: `The property with the ID ${req.params.id} was deleted`
            })
        }

        else
        {
            res.status(404).json({
                message : `property with ID ${req.params.id} was not found`
            })
        }


    })
    .catch(err=>{
        res.status(500).json({
            message:err
          })
    })
};



