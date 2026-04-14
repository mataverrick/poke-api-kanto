import { useEffect, useState } from "react";
import { getKantoPokemos } from "./services/pokemonService.js";
import Card from "./components/Card.jsx";

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
      <div className="content">
        {pokemons.map((value, index) => {
          return <Card key={index} name={value.name} img={value.image} />;
        })}
      </div>
    </>
  );
}

export default App;
