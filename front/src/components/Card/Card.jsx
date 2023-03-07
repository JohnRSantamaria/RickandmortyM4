import { useState, useEffect } from "react";

import { connect } from "react-redux";

import Style from "./Card.module.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { addFavorite, removeFavorite, postFav, deleteFav, getFavorites } from "../../redux/actions/actions.js";

export function Card(props) {

  const {pathname} = useLocation();

  const [isFav, setIsFav] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = () => {
    const characterData = {
      id: props.id,
      name: props.name,
      gender: props.gender,
      status: props.status,
      image: props.image,
      location: props.location,
      origin: props.origin
    }

    if (isFav) {
      setIsFav(false);
      props.removeFavorite(props.id);
      props.deleteFav(props.id);
    }
    else {
      setIsFav(true);
      props.addFavorite(props);
      props.postFav(characterData)   
    }
  };

  useEffect(() => {
    console.log(props.myFavoritesDB)
    props.getFavorites();
    setFavorites(props.myFavoritesDB);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFav])

  useEffect(() => {
    favorites.forEach((fav => {
      if (props.id === fav.id) {
        setIsFav(true);
      }
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites]);





  return (
    <article className={Style.cardContainer}>
      <div className={Style.cardImg}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={Style.cardInf}>
        
        {
          pathname === "/" &&
          <button
            onClick={() => {
              props.onClose(props.id);
            }}
          >
            X
          </button>

        }
        
        
        <div className={Style.dataInf}>
        <Link to={`/detail/${props.id}`}>
          <h1 className="card-title">{props.name}</h1>
        </Link>
          <span>{props.gender}</span>
          <span>{props.status}</span>
          <p>Last Know Location:</p>
          <h4>{props.location}</h4>
          <p>First seen in:</p>
          <h4>{props.origin}</h4>
        </div>
        <span className={Style.favorite}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
        </span>

      </div>

    </article>
  );
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
    allCharacters: state.allCharacters,
    myFavoritesDB: state.myFavoritesDB
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: function (character) {
      dispatch(addFavorite(character));
    },
    removeFavorite: function (id) {
      dispatch(removeFavorite(id));
    },
    postFav: function (characterData) {
      dispatch(postFav(characterData));
    },
    deleteFav: function (id) {
      dispatch(deleteFav(id))
    },
    getFavorites: function () {
      dispatch(getFavorites())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
