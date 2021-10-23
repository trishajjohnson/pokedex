import React from 'react';
import Pokecard from './Pokecard';
import pokes from './pokemons';
import "./Pokedex.css";

const Pokedex = ({pokemons=pokes}) => {
    return (
        <div>
            <h1>Pokedex</h1>
            <div className="Pokedex">
                {pokemons.map(p => (
                    <Pokecard key={p.id} name={p.name} id={p.id} type={p.type} exp={p.base_experience} />
                ))}
            </div>
        </div>
    )
}

export default Pokedex;