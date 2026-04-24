import { useEffect, useState } from "react";
import { getKantoPokemos } from "./services/pokemonService.js";
import Card from "./components/Card.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKantoPokemos();

        const detail = await Promise.all(
          response.results.map(async (pokemon) => {
            const pokeData = await fetch(pokemon.url);
            const data = await pokeData.json();

            return {
              id: data.id,
              name: data.name,
              image: data.sprites.front_default,
            };
          }),
        );

        setPokemons(detail);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>loading...</p>;

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <div className="card-container">
          {pokemons.map((pokemon, index) => {
            return (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.image}
              />
            );
          })}
        </div>
      </main>

      <footer>
        <p>By Erick Mata Vera</p>
      </footer>
    </>
  );
}

export default App;
