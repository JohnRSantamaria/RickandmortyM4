const axios = require("axios");
const url = 'https://rickandmortyapi.com/api/character/';

const getcharById = async (id)=> {
  const getCharactersFromAPI = await axios(`${url}${id}`);
  const data = getCharactersFromAPI.data;
  
  const newData = {
    id: data.id,
    name: data.name,
    status: data.status,
    gender: data.gender,
    location: {...data.location},
    origin:{...data.origin},
    image: data.image
  }

  return newData;

}

module.exports = getcharById;