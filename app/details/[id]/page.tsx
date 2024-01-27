import PokemonDetailsCard from "@/components/details/pokemon-details-card";
import { getPokemonDetails } from "@/lib/services/pokeApi/getPokemonDetails";

export default async function Details({ params }: { params: { id: string } }) {
  const pokemonDetailsData = await getPokemonDetails(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="w-full pt-12 pb-24 max-w-screen-xl">
        <PokemonDetailsCard pokemonDetailsData={pokemonDetailsData} />
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  // This function is used to generate the static paths for the detail pages

  // We want to build all of the pages for the 151 pokemon from Generation 1
  // To do this we create an array of 151 numbers, 1-151
  const indices = Array.from({ length: 151 }, (_, i) => i + 1);

  // We then map over the array of indices and return an object with the id for each pokemon
  return indices.map((index) => ({
    id: index.toString(),
  }));
}
