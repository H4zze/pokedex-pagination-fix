import { PokemonDetails } from "@/lib/interfaces/PokemonDetails";
import PokemonDetailsCard from "@/components/details/pokemon-details-card";
import BackButton from "@/components/details/back-button";
import PokemonToggle from "@/components/details/pokemon-toggle";
import { BASE_API_URL } from "@/lib/constants";

async function getPokemonDetailsData(id: string): Promise<PokemonDetails> {
  const res = await fetch(`${BASE_API_URL}/api/pokemon/${id}`);
  const pokemonDetailsData: PokemonDetails = await res.json();
  return pokemonDetailsData;
}

export default async function Details({ params }: { params: { id: string } }) {
  const pokemonDetailsData = await getPokemonDetailsData(params.id);

  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-12">
      <div className="w-full pt-12 max-w-screen-xl">
        <PokemonDetailsCard pokemonDetailsData={pokemonDetailsData} />
        <PokemonToggle currentIndex={params.id} />
      </div>
    </main>
  );
}
