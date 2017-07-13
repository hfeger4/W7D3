import React from 'react';
import {Route, Link, NavLink} from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonDetail extends React.Component {

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    const {pokemon, items} = this.props;
    console.log(pokemon);
    if (!pokemon) return null;

    return(
      <section>
        <figure>
          <img src={pokemon.image_url} alt={pokemon.name} />
        </figure>
        <ul>
          <li>{pokemon.name}</li>
          <li>Attributes</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Moves: {pokemon.moves}</li>
        </ul>
      </section>
    );
  }
}

export default PokemonDetail;
