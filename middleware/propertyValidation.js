exports.createPropertyValidation = (req,res,next)=>{

    
    const errors = [];
   


    if(!req.body.propertyTitle ||  req.body.propertyTitle === "")
    {
        errors.push( {field : "propertyTitle", message :"You must provide the propertyTitle"})
    
    }


    if(!req.body.propertyRentalPrice  || req.body.propertyRentalPrice === "" )
    {

        errors.push( {field : "propertyRentalPrice", message :"You must provide the propertyRentalPrice"})

    }

    if(!req.body.propertyType ||  req.body.propertyTypee === "")
    {
        errors.push( {field : "propertyType", message :"You must provide the propertyType"})
    
    }


    //THERE ARE ERROS 
    if(errors.length > 0)
    {
        res.status(400).json({
        message : " You did not successfull create a property",
        data : errors  
        })
    }

    else
    {
        next(); // move on to the next middleware (route handler)

    }




}