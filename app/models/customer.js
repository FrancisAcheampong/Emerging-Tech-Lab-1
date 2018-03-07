let mongoose = require('mongoose');

// create a model class
let customersSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password:String,
    feedback:String,
    phone:String
},
{
  collection: "customer"
});

module.exports = mongoose.model('customer', customerSchema);