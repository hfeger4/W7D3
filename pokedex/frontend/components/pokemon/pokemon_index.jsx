import React from 'react';
import {requestAllPokemon} from '../../actions/pokemon_actions';
import { HashRouter, Route } from 'react-router-dom';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const pokes = this.props.pokemon;
    const pokemonItems = pokes.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);
    return(
      <ul>
        <li>{pokemonItems}</li>
        <li><Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} /></li>
      </ul>
    );
  }
}

export default PokemonIndex;
