import React, { useState, useEffect } from "react";
import "./App.css";

const typeColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonId, setPokemonId] = useState(1);
  const [selectedTab, setSelectedTab] = useState("moves"); // "moves" or "info"

  async function fetchPokemon(id) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  }

  useEffect(() => {
    fetchPokemon(pokemonId);
  }, [pokemonId]);

  function prevPokemon() {
    setPokemonId((prev) => (prev > 1 ? prev - 1 : 898));
  }

  function nextPokemon() {
    setPokemonId((prev) => (prev < 898 ? prev + 1 : 1));
  }

  if (!pokemon) return <p>Loading...</p>;

  return (
    <div className="App">
      <h1>Excersise 5 - PokeDex!</h1>

      <div className="pokedex-container">
        {/* Left column: Pokémon card */}
        <div className="pokemon-card">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            width="200"
          />
          <h2>
            {pokemon.name.toUpperCase()}
          </h2>
          <p>
            <strong>Type:</strong>{" "}
            {pokemon.types.map((t) => (
              <span
                key={t.type.name}
                className="type-badge"
                style={{ backgroundColor: typeColors[t.type.name] }}
              >
                {t.type.name.toUpperCase()}
              </span>
            ))}
          </p>

          <div className="nav-buttons">
            <button onClick={prevPokemon}>prev</button>
            <button onClick={nextPokemon}>next</button>
          </div>

        </div>

        {/* Right column: Moves / Stats */}
        <div className="pokemon-info-card">
  {/* Title above the box */}
  <h3 className="info-title">
    {selectedTab === "moves" ? "Moves" : "Stats"}
  </h3>

  {/* Information box with fixed height */}
  <div className="info-box">
    {selectedTab === "moves" ? (
      <ul>
        {pokemon.moves.slice(0, 10).map((m) => (
          <li key={m.move.name}>{m.move.name}</li>
        ))}
      </ul>
    ) : (
      <ul>
        {pokemon.stats.map((s) => (
          <li key={s.stat.name}>
            {s.stat.name.toUpperCase()}: {s.base_stat}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Buttons below the box */}
  <div className="tab-buttons">
    <button
      className={selectedTab === "moves" ? "active" : ""}
      onClick={() => setSelectedTab("moves")}
    >
      Moves
    </button>
    <button
      className={selectedTab === "info" ? "active" : ""}
      onClick={() => setSelectedTab("info")}
    >
      Info
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default App;
