/*********************************************************************************
* 
*  Name: Liping Xiang  Student ID: 139947196  
*
*  Heroku Link: https://young-fortress-58994.herokuapp.com/
*
********************************************************************************/ 


const { blanchedalmond } = require("color-name");
const express = require("express");
const mongoose = require("mongoose");
const customerController = require("./controllers/CustomerController.js");
const propertyController = require("./controllers/PropertyController.js");
const propertyService = require("./services/PropertyService.js");
//const { hydrate } = require("./models/PropertyModel.js");
 

if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path :"config/keys.env"});
}


const app = express();

//to receive and response data in json format
app.use(express.json());





//-------------------------------routes----------------------------------------
app.use("/customers",customerController);
app.use("/properties",propertyController);
app.use("/",propertyService.getAllProperty);


//all the other undefined routes
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});





//---------------------------server start/initialize-----------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, async()=>{

    console.log(`Web Server is up and running on PORT : ${PORT}`);

    try
    {
        await  mongoose.connect(process.env.MONGO_DB_CONNECTION)
  
        console.log(`You are now connected to MongoDB`);
    }

    catch(err)
    {
        console.log(`Error : ${err}`)
    }

})