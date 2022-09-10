import axios from "axios";
import React, { useEffect, useState } from "react";

const CharactersItems = ({ url }) => {
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios.get(url).then((res) => setCharacter(res.data));
  }, []);
  console.log(character);
  return (
    <li className="character-item">
      <div className="character-card">
        <img src={character.image} alt="" />
        <div className="chatacter-name">{character.name}</div>
        <hr />
        <h4 className="character-card_h4">RAZA</h4>
        <p className="character-card_p">{character.species}</p>
        <h4 className="character-card_h4">ORIGEN</h4>
        <p className="character-card_p">{character.origin?.name}</p>
        <h4 className="character-card_h4">APARICION EN EPISODIO</h4>
      </div>
    </li>
  );
};

export default CharactersItems;
