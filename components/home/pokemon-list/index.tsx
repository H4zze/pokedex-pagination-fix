import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import List from "./list";
import Pagination from "./pagination";
import { convertToNumber } from "@/lib/utils";

export default function PokemonList({ listData, page }: { listData: Array<PokemonListItem>; page: string | string[] }) {
  const pageNum = convertToNumber(page, 1);

  return (
    <div className="flex flex-col">
      <List listData={listData} />
      <Pagination page={pageNum} />
    </div>
  );
}
