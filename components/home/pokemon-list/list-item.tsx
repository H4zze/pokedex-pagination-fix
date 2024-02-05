import { PokemonListItem } from "@/lib/interfaces/PokemonListItem";
import Link from "next/link";

export default function ListItem({ name, id }: PokemonListItem) {
  return (
    <Link href={`/details/${id}`} style={{ textDecoration: "none" }}>
      <div className="bg-white/90 my-3 p-3 rounded min-w-[250px]">
        <p>
          #{id} - {name[0].toUpperCase() + name.slice(1).toLowerCase()}
        </p>
      </div>
    </Link>
  );
}
