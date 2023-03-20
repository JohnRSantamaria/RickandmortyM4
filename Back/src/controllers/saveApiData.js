const axios = require("axios");
const URL =  "https://rickandmortyapi.com/api/character"; 


const getApiData = async (URL, n = 5) => {
  try {
    const { data } = await axios.get(`${URL}`);
    const { info, results } = data;
    const res = getRequestedData(results);

    if (n <= 1) return res;

    return res.concat(await getApiData(info.next, n - 1));
  } catch (error) {
    alert(error.message);
  }
};

const getRequestedData = (results) => {
  const requestedData = [];
  results.forEach((character) => {
    requestedData.push({
      id: character.id,
      name: character.name,
      species: character.species,
      status: character.status,
      origin: character?.origin.name,
      gender: character.gender,
      image: character.image,
    });
  });
  return  requestedData;
};

const saveApiData = async ()=> { 
  const information = getApiData(URL, 5);  
  return information;
}

module.exports = saveApiData;
