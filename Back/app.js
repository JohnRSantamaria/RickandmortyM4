const express = require('express');
const cors = require('cors')

const server = express();

//Routes 
const deleteFav = require('./src/routes/deleteFavorite');
const getCharById = require('./src/routes/getCharById');
const getCharDetail = require('./src/routes/getCharDetail');
const getFavorite = require('./src/routes/getfavorite');
const postFavorite = require('./src/routes/postFavorite');
const getAllCharacters = require ('./src/routes/getAllCharacters');
//Middlewears 
server.use(express.json());
server.use(cors());

//Server routes 
server.use('/rickandmorty',getCharById);
server.use('/rickandmorty',getCharDetail);
server.use('/rickandmorty',deleteFav);
server.use('/rickandmorty',getFavorite);
server.use('/rickandmorty',postFavorite);
server.use('/rickandmorty',getAllCharacters);


module.exports = server;