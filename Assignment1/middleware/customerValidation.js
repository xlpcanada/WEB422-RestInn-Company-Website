exports.createCustomerValidation = (req,res,next)=>{

    
    const errors = [];




    if(!req.body.firstName ||  req.body.firstName === "")
    {
        errors.push( {field : "firstName", message :"You must provide the firstName"})
    
    }


    if(!req.body.lastName || req.body.lastName === "" )
    {

        errors.push( {field : "lastName", message :"You must provide the lastName"})

    }

    if(!req.body.email ||  req.body.emaile === "")
    {
        errors.push( {field : "email", message :"You must provide the email"})
    
    }
    if(!req.body.password ||  req.body.password === "")
    {
        errors.push( {field : "password", message :"You must provide the password"})
    
    }


    //THERE ARE ERROS 
    if(errors.length > 0)
    {
        res.status(400).json({
        message : " You did not successfull create a customer",
        data : errors  
        })
    }

    else
    {
        next(); // move on to the next middleware (route handler)

    }



}
