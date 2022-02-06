const  mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({
  
        propertyTitle : {
            type:String,
            required : true     
        },
        propertyRentalPrice : {
            type:Number,
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
        location : {
            type: String
        },
        bestSeller : {
            type: Boolean
        },
        propertyPhotoURL : {
            type: String
        }




},{timestamps:true});


const propertyModel = mongoose.model('Property', propertySchema);


module.exports = propertyModel;