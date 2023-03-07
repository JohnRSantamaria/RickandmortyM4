const { favorites } = require("../utils/data");

const deleteFavorite = (id) => {

  if (favorites.length === 0)throw new Error("There is no character to delete.");

  indexToDelete = favorites.findIndex((fav) => fav.id === parseInt(id));

  favorites.splice(indexToDelete,1);

  return favorites;
};

module.exports = deleteFavorite;
