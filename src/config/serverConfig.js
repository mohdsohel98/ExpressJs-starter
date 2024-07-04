const dotenv = require('dotenv');
dotenv.config();



//  here we are exporting all the env variable that the project can we use 
module.exports = {
 PORT: process.env.PORT,
 DB_URL : process.env.DB_URL
}