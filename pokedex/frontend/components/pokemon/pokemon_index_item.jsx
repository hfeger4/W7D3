import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem= ({pokemon}) => (
  <li className="poke-item">
    <Link to={`/pokemon/${pokemon.id}`}>
      <span>{ pokemon.id }</span>
      <img className="poke-image" src={pokemon.image_url} alt={pokemon.name}/>
      <span>{ pokemon.name }</span>
    </Link>
  </li>
);

export default PokemonIndexItem;
