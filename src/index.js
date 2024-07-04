
 const express = require ('express');
  const bodyparser  =  require('body-parser')

  const serverConfig  = require('./config/serverConfig.js');
// const { connect } = require('mongoose');
const connectDB = require('./config/dbConfig')
 const app = express();
  
 app.use(express.json());
 app.use(express.text())
 app.use(express.urlencoded({extended: true}));

 app.post('/ping', (req, res)=>{
     console.log(req.body);
      return res.json({message: "pong"})
 })

  app.listen(serverConfig.PORT,  async ()=>{
        await connectDB();
        console.log(`Server is Started ${serverConfig.PORT}...`)
     })
    

