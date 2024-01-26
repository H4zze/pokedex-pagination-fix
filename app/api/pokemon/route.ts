import { type NextRequest } from "next/server";

export const dynamic = "force-dynamic"; // defaults to auto

// This API endpoint will return a list of Pokemon from the PokeAPI, but is limited to the first 151 Pokemon(Generation 1)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Get query parameters from the request
  let offset = convertToNumber(searchParams.get("offset"));
  let limitParam = searchParams.get("limit");
  let limit = limitParam === null ? 20 : convertToNumber(limitParam); // Default limit to 20 if not provided

  // Validate query parameters to only allow numbers between 0 and 151
  offset = Math.min(offset, 151);
  limit = Math.min(limit, 151 - offset);

  // Construct the URL to fetch data from the PokeAPI
  const url = new URL("https://pokeapi.co/api/v2/pokemon");
  let params = new URLSearchParams(url.search);
  params.append("limit", limit.toString());
  params.append("offset", offset.toString());
  url.search = params.toString();

  try {
    // If limit is 0, return an empty array
    if (limit === 0) return Response.json([]);
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
      return Response.json([...pokemonList]);
    }
    // Catch any potential errors from the PokeAPI
  } catch (error) {
    return new Response("Server error: Unable to fetch data from API", { status: 500 });
  }
}

function convertToNumber(value: any): number {
  let num = Number(value);
  if (isNaN(num)) {
    return 0;
  } else {
    return num;
  }
}
