import React from 'react';
import {requestAllPokemon} from '../../actions/pokemon_actions';

class PokemonIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const pokes = this.props.pokemon;
    console.log(this.props);
    console.log(pokes);
    return(
      <ul>

        {
          pokes.map((pokemon) => (
            <li>
              <p>{pokemon.name}</p>
              <img src={pokemon.image_url} />
            </li>
            )
        )}
      </ul>
    );
  }
}

export default PokemonIndex;
