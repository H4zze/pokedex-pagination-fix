import PokemonDetailsCard from "@/components/details/pokemon-details-card";
import PokemonToggle from "@/components/details/pokemon-toggle";
import { getPokemonDetails } from "@/lib/services/pokeapi/getPokemonDetails";

export default async function Details({ params }: { params: { id: string } }) {
  const pokemonDetailsData = await getPokemonDetails(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="w-full pt-12 max-w-screen-xl">
        <PokemonDetailsCard pokemonDetailsData={pokemonDetailsData} />
        <PokemonToggle currentIndex={params.id} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const indices = Array.from({ length: 10 }, (_, i) => i + 1);

  return indices.map((index) => ({
    id: index.toString(),
  }));
}
