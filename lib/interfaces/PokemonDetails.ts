export interface PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
  types: string[];
  stats: PokemonStats;
  moves: PokemonMove[];
  sprite: string;
}

interface PokemonMove {
  name: string;
  url: string;
}

interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  speed: number;
  special_attack: number;
  special_defense: number;
}
