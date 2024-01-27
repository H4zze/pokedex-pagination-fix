import PokemonList from "../components/home/pokemon-list";
import getPokemonList from "@/lib/services/pokeApi/getPokemonList";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const limit = searchParams.limit || "10";
  const page = searchParams.page || "1";
  const pokemonListData = await getPokemonList({ limit, page });

  return (
    <main className="p-24 pt-32 grow">
      <section className="w-full items-center justify-between text-center py-6">
        <h1>Welcome to Kantodex</h1>
        <h3>Your trusted source for information about Pokemon from Generation 1.</h3>
      </section>
      <section className="w-full flex justify-center py-6">
        <PokemonList listData={pokemonListData} page={page} />
      </section>
    </main>
  );
}
