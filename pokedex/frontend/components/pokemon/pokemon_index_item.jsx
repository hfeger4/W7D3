import React from 'react';
import { NavLink, Link } from 'react-router-dom';


const PokemonIndexItem= ({pokemon}) => (
  <li className="poke-item">
    <NavLink to={`/pokemon/${pokemon.id}`}>
      <div>
        <img className="poke-image" src={pokemon.image_url} alt={pokemon.name}/>
        <span>{ pokemon.id }:  </span>
        <span> { pokemon.name }</span>
      </div>
    </NavLink>
  </li>
);

export default PokemonIndexItem;
