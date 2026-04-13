import { useEffect, useState } from "react";
import { getKantoPokemos } from "./services/pokemonService.js";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKantoPokemos();

        setPokemons(response.results);
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
          return (
            <div className="card-pokemon" key={index}>
              <p>{value.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
