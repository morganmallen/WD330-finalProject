const pokedex = document.getElementById("pokedex");

export async function getPokemonList() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();
  return data.results; // Array of { name, url }
}

export async function getPokemonDetails(url) {
  const res = await fetch(url);
  return await res.json();
}

export async function renderPokemonCards() {
  const list = await getPokemonList();

  for (const pokemon of list) {
    const details = await getPokemonDetails(pokemon.url);
    const card = createPokemonCard(details);
    pokedex.appendChild(card);
  }
}

export function createPokemonCard(pokemon) {
  const card = document.createElement("div");
  card.className = "pokemon-card";

  card.innerHTML = `
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    <p>Type: ${pokemon.types.map((t) => t.type.name).join(", ")}</p>
    <p>HP: ${pokemon.stats[0].base_stat}</p>
  `;

  return card;
}
