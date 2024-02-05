import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import List from "./list";
import Pagination from "./pagination";
import { convertToNumber } from "@/lib/utils";

export default function PokemonList({
  listData,
  page,
  limit,
}: {
  listData: Array<PokemonListItem>;
  page: string | string[];
  limit: string | string[];
}) {
  const pageNum = convertToNumber(page, 1);
  const limiNum = convertToNumber(limit, 1);

  return (
    <div className="flex flex-col items-center">
      <List listData={listData} />
      <Pagination page={pageNum} limit={limiNum} />
    </div>
  );
}
