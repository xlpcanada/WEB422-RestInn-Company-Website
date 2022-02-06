
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



exports.getAllProperty = (req,res)=>{
    propertyModel.find()
    .then(properties=>{
          
        res.joson({
            message: `A list of all the properties.`,
            data: properties,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};



exports.getPropertyTypes = (req,res)=>{

    propertyModel.find({}, 'propertyType')
    .then(properties=>{
          
        res.joson({
            message: `All the property types.`,
            data: properties,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};



exports.getPropertyByType = (req,res)=>{

    propertyModel.find({propertyType: req.params.type})
    .then(properties=>{
          
        res.joson({
            message: `All the properties with the type ${req.params.type}.`,
            data: properties,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};




exports.getPropertyByLocation = (req,res)=>{

    propertyModel.find({location: req.params.location})
    .then(properties=>{
          
        res.joson({
            message: `All the properties with the location ${req.params.location}.`,
            data: properties,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};



exports.getBestSellers = (req,res)=>{

    propertyModel.find({bestSellers:true})
    .then(properties=>{
          
        res.joson({
            message: `All the properties marked as bestsellers.`,
            data: properties,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
        })
    })
};

  


exports.getPropertyById = (req,res)=>{

    propertyModel.findById(req.params.id)
    .then(property=>{

        if(property){
            res.joson({
                message : `Property with the id ${req.params.id}`,
                data: property
            })
        }
        else{
            res.status(404).json({
                message: `There is no such property with the id ${req.params.id} in our database.`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:err
          })
    })
};




exports.updateAProperty = (req,res)=>{

    propertyModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(property=>{

        if(property){
            res.joson({
                message : `Property with the id ${req.params.id} was updated`,
                data: property
            })
        }
        else{
            res.status(404).json({
                message: `There is no such property with the id ${req.params.id} in our database.`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
            message:err
          })
    })
};




exports.deleteAProperty = (req,res)=>{

    propertyModel.findByIdAndRemove(req.params.id)
    .then(()=>{

        res.json({
            message: `Ther property with the id ${req.params.id} was deleted.`
        })
    })
    .catch(err=>{
        res.status(500).json({
            message:err
          })
    })
};



