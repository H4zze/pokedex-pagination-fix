import PokemonList from "../components/home/pokemon-list";
import { BASE_API_URL } from "@/lib/constants";

async function getPokemonListData() {
  const res = await fetch(`${BASE_API_URL}/api/pokemon`);
  const pokemonListData = await res.json();
  return pokemonListData;
}

export default async function Home() {
  const pokemonListData = await getPokemonListData();

  return (
    <main className="p-24 pt-32">
      <section className="w-full items-center justify-between text-center py-6">
        <h1>Welcome to Kantodex</h1>
        <h3>Your trusted source for information about the Kanto region Pokemon (Gen 1).</h3>
      </section>
      <section className="w-full flex justify-center py-6">
        <PokemonList listData={pokemonListData} />
      </section>
    </main>
  );
}
