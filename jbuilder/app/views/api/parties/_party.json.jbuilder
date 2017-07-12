json.extract! party, :name, :location

json.guests do |guest|
  json.array! party.guest, :name, :age, :favorite_color
end
