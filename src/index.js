
 const express = require ('express')
  const serverConfig  = require('../config/serverConfig.js')
 const app = express();
  

  // const PORT = process.env.PORT;

     app.listen(serverConfig.PORT,()=>{
      console.log(`Server is Started ${serverConfig.PORT}...`)
     })
    