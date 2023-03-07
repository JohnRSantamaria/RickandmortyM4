import Styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (

    <div className={Styles.containerDetail}>
      <Link to="/" className={Styles.LinkDetailCard}>
        <h2>← Back</h2>
      </Link>
      <div className={Styles.ContainerDetailCard}>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} />
        <div className={Styles.infCards}>
          <h3>{`Status: ${character.status}`}</h3>
          <h3>{`Specie: ${character.species}`}</h3>
          <h3>{`Gender: ${character.gender}`}</h3>
          <h3>{`Location: ${character.location?.name}`}</h3>
          <h3>{`Origin: ${character.origin?.name}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default Detail;
