const {favorites} = require("../utils/data");

const postFavorites = (data) => {
  //Todo
  /*
    Que no agrege repetidos //Done
    verificar los campos que no esten vacios
    que sea un obejeto
    */


  if (favorites.length === 0) favorites.push(data);

  const isRepeated = favorites.find((fav) => fav.id === data.id);

  if (!isRepeated) favorites.push(data);

  return favorites;
};

module.exports = postFavorites;