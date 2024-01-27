import { PokemonDetails } from "@/lib/interfaces/PokemonDetails";
import BackButton from "@/components/details/pokemon-details-card/back-button";
import styles from "./pokemon-details-card.module.css";
import Label from "@/components/details/pokemon-details-card/label";
import DisplayStat from "@/components/details/pokemon-details-card/display-stat";
import PokemonToggle from "@/components/details/pokemon-details-card/pokemon-toggle";

export default function PokemonDetailsCard({ pokemonDetailsData }: { pokemonDetailsData: PokemonDetails }) {
  return (
    <div>
      <div className="relative flex flex-col rounded w-full justify-center align-middle">
        <div className="flex flex-row w-full align-center justify-center">
          <div className="absolute bg-white/90 rounded-t bottom-0 w-full h-1/2"></div>
          <BackButton />
          <div className={styles["pokemon-image-wrapper"]}>
            <div className={styles["pokemon-image-container"]}>
              <img className={styles["pokemon-image"]} src={pokemonDetailsData.sprite} alt={pokemonDetailsData.name} />
            </div>
          </div>
        </div>
        <PokemonToggle currentIndex={pokemonDetailsData.id} />
      </div>
      <div className="flex-row bg-white/90 rounded-b justify-center align-start text-center pt-4">
        <div>
          <h1>{pokemonDetailsData.name}</h1>
        </div>
        <div>
          <p className="lilita-one text-3xl"># {pokemonDetailsData.id}</p>
        </div>

        <div className="flex items-end justify-center gap-6 pt-6">
          <div>
            <div className="flex gap-1">
              {pokemonDetailsData.types.map((type) => (
                <Label key={type}>{type}</Label>
              ))}
            </div>
            <p className="font-medium">Types</p>
          </div>
          <div>
            <p>{pokemonDetailsData.weight}</p>
            <p className="font-medium">Weight</p>
          </div>
          <div>
            <p>{pokemonDetailsData.height}</p>
            <p className="font-medium">Height</p>
          </div>
        </div>

        <div className="flex px-6 pt-12 md:px-12 lg:px-24 gap-6 pb-12 lg:pb-24">
          <div className="w-1/2 ">
            <div className="border-b-2 border-gray-300 pb-2">
              <p className="font-medium">Stats</p>
            </div>
            <div className="flex flex-col pt-3 items-center">
              <DisplayStat statType="Hp" statValue={pokemonDetailsData.stats.hp} />
              <DisplayStat statType="Atk" statValue={pokemonDetailsData.stats.attack} />
              <DisplayStat statType="Def" statValue={pokemonDetailsData.stats.defense} />
              <DisplayStat statType="Spd" statValue={pokemonDetailsData.stats.speed} />
              <DisplayStat statType="Sp.Atk" statValue={pokemonDetailsData.stats.special_attack} />
              <DisplayStat statType="Sp.Def" statValue={pokemonDetailsData.stats.special_defense} />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="border-b-2 border-gray-300 pb-2">
              <p className="font-medium">Moves</p>
            </div>
            <div className="flex flex-wrap justify-center gap-1 pt-3">
              {pokemonDetailsData.moves.map((move) => (
                <Label key={move.name}>{move.name}</Label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
