import { PokemonDetails } from "@/lib/interfaces/PokemonDetails";
import BackButton from "@/components/details/back-button";
import styles from "./pokemon-details-card.module.css";
import Label from "@/components/details/pokemon-details-card/label";
import DisplayStat from "@/components/details/pokemon-details-card/display-stat";

export default function PokemonDetailsCard({ pokemonDetailsData }: { pokemonDetailsData: PokemonDetails }) {
  return (
    <div>
      <div className="relative flex flex-col rounded w-full justify-center align-middle">
        <div className="flex flex-row w-full align-center justify-center">
          <div className="absolute bg-white/90 bottom-0 w-full h-1/2"></div>
          <BackButton />
          <div className={styles["pokemon-image-wrapper"]}>
            <div className={styles["pokemon-image-container"]}>
              <img className={styles["pokemon-image"]} src={pokemonDetailsData.sprite} alt={pokemonDetailsData.name} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row bg-white/90 justify-center align-start text-center pt-4">
        <div>
          <h1>{pokemonDetailsData.name}</h1>
        </div>
        <div>
          <p className="lilita-one text-3xl"># {pokemonDetailsData.id}</p>
        </div>

        <div className="flex justify-center gap-6 pt-6">
          <div>
            <div className="flex gap-1">
              {pokemonDetailsData.types.map((type) => (
                <Label key={type}>{type}</Label>
              ))}
            </div>
            <p>Types</p>
          </div>
          <div>
            <p>{pokemonDetailsData.weight}</p>
            <p>Weight</p>
          </div>
          <div>
            <p>{pokemonDetailsData.height}</p>
            <p>Height</p>
          </div>
        </div>

        <div className="flex px-6 md:px-12 lg:px-24 gap-6 pb-12">
          <div className="w-1/2 ">
            <div className="border-b-2 border-black"> Stats</div>
            <div className="pt-3">
              <DisplayStat statType="hp" statValue={pokemonDetailsData.stats.hp} />
              <DisplayStat statType="attack" statValue={pokemonDetailsData.stats.attack} />
              <DisplayStat statType="defense" statValue={pokemonDetailsData.stats.defense} />
              <DisplayStat statType="speed" statValue={pokemonDetailsData.stats.speed} />
              <DisplayStat statType="special_attack" statValue={pokemonDetailsData.stats.special_attack} />
              <DisplayStat statType="special_defense" statValue={pokemonDetailsData.stats.special_defense} />
            </div>
          </div>
          <div className="w-1/2 ">
            <div className="border-b-2 border-black">Moves</div>
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
