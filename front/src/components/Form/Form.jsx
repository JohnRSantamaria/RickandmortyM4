import React from "react";
import Styles from "./Form.module.css";
import validation from "./validation.js";
import Rick from "../../utils/Rick.png";
import Morty from "../../utils/Morty.png";

const Form = ({ login }) => {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = () => {
    login(userData);
  };

  return (
    <>
      <div className={Styles.backGround} />
      <div className={Styles.containerForm}>
        <span className={Styles.form}>
          <div className={Styles.neonLetters}>
            <span>Rick</span>
            <span> & </span>
            <span>Morty</span>
            <span>App</span>
          </div>
          
          <div className={Styles.containerInputs}>
            <label htmlFor="username"></label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username:"
              value={userData.username}
              onChange={handleInputChange}
              className={errors.username && Styles.warning}
            />

            <label htmlFor="password"></label>
            <input
              type="text"
              name="password"
              placeholder="Enter your Password:"
              value={userData.password}
              onChange={handleInputChange}
              className={errors.password && Styles.warning}
            ></input>
            <button onClick={handleSubmit}>Login</button>
          </div>
          <figure className={Styles.imageRick}>
            <img src={Rick} alt="rickandmorty_Rick" />
          </figure>
          <figure className={Styles.imageMorty}>
            <img src={Morty} alt="rickandmorty_Morty" />
          </figure>
        </span>
      </div>

    </>
  );
};

export default Form;
