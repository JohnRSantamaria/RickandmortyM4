import { ADD_FAVORITE, REMOVE_FAVORITE ,FILTER, ORDER, ADD_FAVORITE_DB, DELETE_FAVORITE,GET_FAVORITES } from "../actions/types.js";

const inicialState = {
  cards: {},
  characterSearch: "",
  myFavorites: [],
  allCharacters: [],
  myFavoritesDB: []
}

const rootReducer = (state = inicialState, { type, payload }) => {

  switch (type) {
    case ADD_FAVORITE: 
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.myFavorites, payload]
      }
    case REMOVE_FAVORITE:
      const filteredList = state.myFavorites.filter((fav) => fav.id !== payload)
      return {
        ...state,
        myFavorites: filteredList,
        allCharacters: filteredList
      }
    case FILTER:      
      let filteredCharacters = state.allCharacters;
      if(payload !== "All"){
        filteredCharacters = state.allCharacters.filter((fav) => fav.gender === payload)
      }
      
      return {
        ...state,
        myFavorites: filteredCharacters
      }
      
    case ORDER:
      let orderCards = [];
//Descendente , Ascendente
      
      if (payload === "Ascendente") {

        orderCards = state.allCharacters.sort((a, b) => {
          if (a.id > b.id) {
            return 1
          }
          if (a.id < b.id) {
            return -1
          }
          return 0;
        });
      }

      if (payload === "Descendente") {
        orderCards = state.allCharacters.sort((a, b) => {
          if (a.id < b.id) {
            return 1
          }
          if (a.id > b.id) {
            return -1
          }
          return 0;
        });
      }
      return {
        ...state,
        myFavorites: orderCards
      }
    case ADD_FAVORITE_DB:
      return{
        ...state,
        myFavoritesDB: payload
      }
    case DELETE_FAVORITE:
      return{
        ...state,
        myFavoritesDB:payload
      }

    case GET_FAVORITES:
      return{
        ...state,
        myFavoritesDB:payload
      }
    default:
      return { ...state }

  }

}

export default rootReducer;