const  mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({

        id:{
            type: Object
        },
        propertyTitle : {
            type:String,
            required : true     
        },
        propertyRentalPrice : {
            type: String,
            required : true
        },

        propertyDescription : {
            type:String,
            
        },
        propertyType :  {
            type:String,
            required : true
        },
        houseRules : [{
            type:String
        }],
        amenities : [{
            type:String
        }],
        bestSellers : {
            type: Boolean
        },
        location : {
            type: String
        },
        propertyPhotoURL : {
            type: String
        }




},{timestamps:true});


const propertyModel = mongoose.model('Property', propertySchema);


module.exports = propertyModel;