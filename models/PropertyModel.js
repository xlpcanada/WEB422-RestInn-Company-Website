const  mongoose = require("mongoose");
const { Schema } = mongoose;

const propertySchema = new Schema({

        propertyTitle : {
            type:String,
            required : true     
        },
        propertyRentalPrice : {
            type: Number,
            required : true
        },

        propertyDescription : {
            type:String,
            
        },
        propertyType :  {
            type:String,
            required : true
        },
        houseRules : {
            type : Array 
        },
        amenities : {
            type: Array
        },
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