
export const selectAllPokemon = (state) => (
  Object.keys(state.pokemon).map(id => state.pokemon[id])
);
