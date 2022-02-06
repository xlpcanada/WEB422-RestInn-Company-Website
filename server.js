const { blanchedalmond } = require("color-name");
const express = require("express");
const mongoose = require("mongoose");


if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path :"config/keys.env"});
}


const customerController = require("./controllers/CustomerController.js");
const propertyController = require("./controllers/PropertyController.js");
//const { hydrate } = require("./models/PropertyModel.js");



const app = express();


app.use(express.json());


app.use("/customers",customerController);
app.use("/properties",propertyController);


const PORT = process.env.PORT;
app.listen(PORT, async()=>{

    console.log(`Web Server is up an running on PORT : ${PORT}`);

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