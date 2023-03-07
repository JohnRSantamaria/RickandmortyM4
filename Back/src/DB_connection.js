require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const Character = require("./models/Character");
/*
EJERCICIO 01
A la instancia de Sequelize le falta la URL de conexión.
Recuerda pasarle la información de tu archivo '.env'.

URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
*/


const sequelize = new Sequelize(
   // URL
   `postgres://postgres:1234@localhost:5432/rickandmorty`,
   { logging: false, native: false }
);


/*
EJERCICIO 03
Debajo de este comentario puedes ejecutar la función de los modelos.
*/
Character(sequelize);

sequelize.authenticate();
module.exports = {
   ...sequelize.models,
   sequelize,
};
