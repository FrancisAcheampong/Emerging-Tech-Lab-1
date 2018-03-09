var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;
// create a model class
var customersSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password:String
  
});

mongoose.model('customers', customersSchema);