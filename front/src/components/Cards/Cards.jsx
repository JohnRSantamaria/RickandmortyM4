import Card from "../Card/Card";
import Styles from "./Cards.module.css"


export default function Cards({ characters,onClose }) {

  return (
    <div className={Styles.containerGrid}>
      {characters.map((Character) => (
        <Card 
        key = {Character.id}
        id = {Character.id}
        name={Character.name}
        gender={Character.gender}
        status={Character.status}
        image={Character.image}
        location={Character.location?.name}
        origin={Character.origin?.name}
        onClose={onClose}
        />
      ))}
    </div>
  );
}
