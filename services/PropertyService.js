const PropertyModel = require("../models/PropertyModel.js");


exports.getAllProperty = (req,res)=>{

      //  new PropertyModel(req.body)

        res.json({
            message : "Spiderman nno way was an AWESOME MOVIE. YOU SHOULD IT"
        })

};

exports.getAProperty = (req,res)=>{

    res.json({
        message : `This is a get request with the id ${req.params.id}`
    })

};


exports.createAProperty = async(req,res)=>{

    res.json({
        message : "The Property was created successful ",
       
    })


};

exports.updateAProperty = (req,res)=>{

    res.json({
        message : `This is a PUT request with the id ${req.params.id}`
    })


};

exports.deleteAProperty = (req,res)=>{

    res.json({
        message : `This is a DELETE request with the id ${req.params.id}`
    })


};


exports.getPropertyTypes = (req,res)=>{

    res.json({
        message : `This is a request that retrieves all the properties types`
    })


};


exports.getPropertyByType = (req,res)=>{

    res.json({
        message : `This is a request that retrieves all properties that 
            belong to a specified type ${req.params.type}`
    })


};



exports.getPropertyByLocation = (req,res)=>{

    res.json({
        message : `This is a request that retrieves all properties that 
            belong to a specified location ${req.params.location}`
    })


};




exports.getBestSellers = (req,res)=>{

    res.json({
        message : `This is a request that retrieves all properties marked as bestsellers`
    })


};