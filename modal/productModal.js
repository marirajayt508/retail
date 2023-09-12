const mongoose = require("mongoose");
const config = require('config'); 

//Verify Connection
const connection = mongoose.connection;

connection.on("connected",()=>{
console.log("PRODUCT MODAL CONNECTED")
  });

connection.on("error",()=>{
console.log("PRODUCT MODAL CONNECTION ERROR")
});

const productSchema =  new mongoose.Schema({
"productname": {
  "type" : String,
},
"intialstock": {
    "type" : Number,
  },
  "availablestock":{
    "type" : Number,
  },
  "orderedstock":{
    "type" : Number,
    "default" : 0
  },
  "_id":{
    "type" : String,
  },
});

const blogModal = mongoose.model(config.get("app.db.collections.productDetails"),productSchema);

module.exports = blogModal;