const {sequelize, character} = require("./src/DB_connection");
const saveApiData = require("./src/controllers/saveApiData");
const { response } = require("./app");



const PORT = 3001

require('./app')
.listen(PORT, async()=>{
  
  console.log('server listening on Port: '+PORT);
  await sequelize.sync({force:true});

  saveApiData()
    .then((response) => character.bulkCreate(response))
    .catch((error) => alert(error.message));
} );