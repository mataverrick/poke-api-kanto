import { useEffect, useState } from "react";
import { getKantoPokemos } from "./services/pokemonService.js";
import Card from "./components/Card.jsx";
import Nav from "./components/Nav.jsx";
import Paginate from "./components/Paginate.jsx";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 10;

  const totalPages = Math.ceil(1350 / limit);
  const pagesPerView = 5;
  const currentBlock = Math.floor((page - 1) / pagesPerView);

  const start = pagesPerView * currentBlock + 1;
  const end = Math.min(start + pagesPerView - 1,totalPages);

  const pagination = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getKantoPokemos(limit, offset);

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
  }, [page]);

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

        <div className="actions">
          {pagination.map((p) => (
            <button
              key={p}
              onClick={() => {
                setPage(p);
                setOffset((p - 1) * limit);
              }}
            >
              {p}
            </button>
          ))}
        </div>
      </main>

      {/* Lo pasare a componente ignorarlo por el momento */}
      <footer>
        <p>By Erick Mata Vera</p>
      </footer>
    </>
  );
}

export default App;
