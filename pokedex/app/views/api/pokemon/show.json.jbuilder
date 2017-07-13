json.poke do
    json.extract! @pokemon, :id, :name, :attack, :defense
    json.image_url asset_path(@pokemon.image_url)
    json.extract! @pokemon, :moves, :poke_type
end

json.items do
    json.array! @pokemon.items do |item|
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
    end
end
