import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import ListItem from "./list-item";

export default function List({ listData }: { listData: Array<PokemonListItem> }) {
  return (
    <div className="flex flex-col">
      {listData.map((item: any) => (
        <ListItem key={item.name} name={item.name} id={item.id} />
      ))}
    </div>
  );
}
