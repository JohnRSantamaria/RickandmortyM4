const axios = require('axios');
const url = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (id)=> {
  const getCharactersFromAPI = await axios(`${url}${id}`);
  const data = getCharactersFromAPI.data;
  
  const newData = {
    id: data.id,
    name: data.name,
    species: data.species,
    status: data.status,
    gender: data.gender,
    origin: {...data.origin},
    location: {...data.location},
    image: data.image
  }

  return newData;

}

module.exports = getCharDetail;