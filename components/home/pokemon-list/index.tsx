import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import List from "./list";
import Pagination from "./pagination";

export default function PokemonList({ listData }: { listData: Array<PokemonListItem> }) {
  return (
    <div className="flex flex-col">
      <List listData={listData} />
      <Pagination page={1} />
    </div>
  );
}
