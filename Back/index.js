const {sequelize} = require("./src/DB_connection");
const saveApiData = require("./src/controllers/saveApiData");

const PORT = 3001

require('./app')
.listen(PORT, async()=>{
  sequelize.sync({force:true});

  saveApiData();
  console.log('server listening on Port: '+PORT)
} );