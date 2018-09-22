# star wars

50.times do
  Location.create(nerd_type: 'starwars', name: Faker::StarWars.planet)
end

50.times do
  Character.create(nerd_type: 'starwars', name: Faker::StarWars.character)
end

# star trek

50.times do
  Location.create(nerd_type: 'startrek', name: Faker::StarTrek.location)
end

50.times do
  Character.create(nerd_type: 'startrek', name: Faker::StarTrek.character)
end

puts "seeded"

