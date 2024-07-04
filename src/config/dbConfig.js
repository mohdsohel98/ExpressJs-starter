
const mongoose = require('mongoose');
 const serverConfig= require('./serverConfig')


//  the below  function helps us to connect to mongoDb server 
  

async function coonectDb(){
 try{
  await mongoose.connect(serverConfig.DB_URL);
   console.log("Succesfully connected to the mongo db server....... ")

 }

 catch(error){
 console.log(' Not  abble to coonect mongoDb server....');
  console.log(error);
 }


}
 module.exports= coonectDb;