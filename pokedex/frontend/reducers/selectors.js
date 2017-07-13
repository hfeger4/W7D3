
export const selectAllPokemon = (state) => {
  return Object.keys(state.pokemon.entities).map(id => state.pokemon.entities[id]);
};
