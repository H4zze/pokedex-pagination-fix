import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import { convertToNumber } from "@/lib/utils";

export const dynamic = "force-dynamic"; // defaults to auto

// This API endpoint will return a list of Pokemon from the PokeAPI, but is limited to the first 151 Pokemon(Generation 1)
export default async function getPokemonList({
  page,
  limit,
}: {
  page: string | string[];
  limit: string | string[];
}): Promise<PokemonListItem[]> {
  let limitValue = convertToNumber(limit, 20);
  const pageValue = convertToNumber(page, 1);

  // Calculate the offset value based on the page and limit values
  let offsetValue = (pageValue - 1) * limitValue;

  // Validate query parameters to only allow numbers between 0 and 151
  offsetValue = Math.min(offsetValue, 151);
  limitValue = Math.min(limitValue, 151 - offsetValue);

  // Construct the URL to fetch data from the PokeAPI
  const url = new URL("https://pokeapi.co/api/v2/pokemon");
  let params = new URLSearchParams(url.search);
  params.append("limit", limitValue.toString());
  params.append("offset", offsetValue.toString());
  url.search = params.toString();

  try {
    // If limit is 0, return an empty array
    if (limitValue === 0) return [];
    // Else fetch data from the PokeAPI
    else {
      let pokeapiResponse = await fetch(url.toString());
      let pokeapiData = await pokeapiResponse.json();
      let pokemonList = (pokeapiData?.results || []).map((pokemon: any) => {
        let id = pokemon.url.match(/\/(\d+)\//)[1];
        if (id) id = Number(id);
        return {
          name: pokemon.name,
          id,
        };
      });
      return [...pokemonList];
    }
    // Catch any potential errors from the PokeAPI
  } catch (error) {
    return [];
  }
}
