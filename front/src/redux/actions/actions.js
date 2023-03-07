import { ADD_FAVORITE,REMOVE_FAVORITE, FILTER, ORDER, ADD_FAVORITE_DB, DELETE_FAVORITE,GET_FAVORITES } from "./types";
import axios from "axios";

export function addFavorite (character) {
  return{
    type: ADD_FAVORITE,
    payload: character
  }
}

export function removeFavorite (id){
  return{
    type: REMOVE_FAVORITE,
    payload: id
  }
}

export function filterCards(status){
  return{
    type: FILTER,
    payload: status
  }
}

export function orderCards(instruct){
  
  return{
    type:ORDER,
    payload: instruct
  }
}


export const postFav = (datos) => async (dispatch) => {
  axios
    .post("http://localhost:3001/rickandmorty/favs", { datos })
    .then((res) => dispatch({type: ADD_FAVORITE_DB, payload: res.data}))
    .catch((err) => {
      console.log(err);
    });
};

export const deleteFav = (id) => async (dispatch) => {
  axios
    .delete(`http://localhost:3001/rickandmorty/favs/${id}`)
    .then((res) => dispatch({ type: DELETE_FAVORITE, payload: res.data }))
    .catch((err) => {
      console.log(err);
    });
};

export const getFavorites = () =>  async (dispatch)=> {
  axios
    .get("http://localhost:3001/rickandmorty/favs")
    .then(res=> dispatch({type:GET_FAVORITES, payload:res.data}))
    .catch(error => console.log(error));
}