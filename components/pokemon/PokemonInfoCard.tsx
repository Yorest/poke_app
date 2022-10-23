import { createContext, ReactElement } from "react";
import { IPokemon } from "../../interfaces";
import { PokemonInfoCardDetail } from "./PokemonInfoCardDetail";
import { PokemonInfoCardNav } from "./PokemonInfoCardNav";
import { PokemonInfoCardImage } from "./PokemonInfoCardImage";
import { PokemonInfoCardContainer } from "./PokemonInfoCardContainer";
import { PokemonInfoCardTitle } from "./PokemonInfoCardTitle";
import { PokemonInfoCardStats } from "./PokemonInfoCardStats";
import { PokemonInfoCardAbilities } from "./PokemonInfoCardAbilities";
import { PokemonInfoCardSprites } from "./PokemonInfoCardSprites";
import { PokemonInfoCardEvolution } from "./PokemonInfoCardEvolution";

interface Props {
  pokemon: IPokemon;
  isInFavorites: boolean;
  onToggleFavorite: () => void
  children?: ReactElement | ReactElement[];
}

interface PokemonContextProps{
  pokemon: IPokemon;
  isInFavorites: boolean;
  onToggleFavorite: () => void
}

export const pokemonContext = createContext({} as PokemonContextProps);
const {Provider} = pokemonContext

export const PokemonInfoCard = ({ pokemon,isInFavorites, onToggleFavorite,children }: Props) => {
  return (
    <Provider value={{pokemon,isInFavorites,onToggleFavorite}}>
      {children}
    </Provider>
  );
};
