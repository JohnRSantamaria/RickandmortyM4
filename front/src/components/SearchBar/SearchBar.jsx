import { useState } from "react";
import { connect } from "react-redux";
import Styles from "./SearchBar.module.css"

export function SearchBar(props) {

  const [charactersName, setCharactersname] = useState("");

  const onSearch = (e) => {
    setCharactersname(e.target.value)
  }

  return (
    <div className={Styles.containerSearch}>
      <div className={Styles.searchBox}>
        <input type="search" onChange={onSearch} placeholder="Type a number"/>
      </div>
      <button onClick={() => props.onSearch(charactersName)}>Add</button>
      <button onClick={() => props.onSearch(Math.floor(Math.random() * (825-1)))}>Random</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    characterSearch: state.characterSearch,
    cards: state.cards
  }
}

export default connect(mapStateToProps, null)(SearchBar);