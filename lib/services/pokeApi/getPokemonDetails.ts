import { PokemonDetails } from "@/lib/interfaces/PokemonDetails";
import { capName } from "@/lib/utils";

export async function getPokemonDetails(id: string): Promise<PokemonDetails> {
  let pokeapiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let pokeapiData = await pokeapiResponse.json();

  const pokemonDetails: PokemonDetails = {
    name: capName(pokeapiData.name),
    id: pokeapiData.id,
    height: pokeapiData.height,
    weight: pokeapiData.weight,
    types: pokeapiData.types.map((typeEntry: any) => typeEntry.type.name),
    stats: extractStats(pokeapiData.stats),
    moves: pokeapiData.moves.map((move: any) => ({
      name: move.move.name,
      url: move.move.url,
    })),
    sprite: pokeapiData.sprites.other["dream_world"].front_default,
  };

  return { ...pokemonDetails };
}

function extractStats(stats: any[]) {
  let statsObject: any = {};
  stats.forEach((statEntry) => {
    statsObject[statEntry.stat.name.replace("-", "_")] = statEntry.base_stat;
  });
  return statsObject;
}
