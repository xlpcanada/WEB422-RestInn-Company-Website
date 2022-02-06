const  mongoose = require("mongoose");
const { Schema } = mongoose;

const customerSchema = new Schema({
  
        firstName : {
            type:String,
            required : true     
        },
        lastName : {
            type:String,
            required : true
        },

        email : {
            type:String,
            required : true
        },
        password :  {
            type:Number,
            required : true
        },
        phoneNumbers : [{
            type:String
        }]

},{timestamps:true});


const customerModel = mongoose.model('Customer', customerSchema);


module.exports = customerModel;