import React from "react";
import "./Pokecard.css";

const Pokecard = ({name, id, type, exp}) => (
    <div className="Pokecard">
        <h4 className="Pokecard-name">{name}</h4>
        <img className="Pokecard-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="pokemon img" />
        <p className="Pokecard-details">Type: { type }</p>
        <p className="Pokecard-details">EXP: { exp }</p>
    </div>
)


export default Pokecard;