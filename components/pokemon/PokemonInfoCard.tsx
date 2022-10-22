import { ReactElement } from "react";
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
  children?: ReactElement | ReactElement[];
}

export const PokemonInfoCard = ({ pokemon }: Props) => {
  return (
    <>
      <PokemonInfoCardNav id={pokemon.id} />
      <PokemonInfoCardDetail>
        <PokemonInfoCardImage
          url={pokemon.sprites.other?.dream_world.front_default || ""}
          alt={`pokemon-${pokemon.name}`}
        />
        <PokemonInfoCardContainer pokemonType={pokemon.types[0].type.name}>
          <PokemonInfoCardTitle
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            weight={pokemon.weight}
            height={pokemon.height}
          />

          <PokemonInfoCardStats stats={pokemon.stats} />

          <PokemonInfoCardAbilities
            abilities={pokemon.abilities}
            PokemonType={pokemon.types[0].type.name}
          />

          <PokemonInfoCardSprites
            sprites={pokemon.sprites}
            name={pokemon.name}
          />

          <PokemonInfoCardEvolution
            evolutionChain={pokemon.evolutionChain}
            name={pokemon.name}
            id={pokemon.id}
          />
        </PokemonInfoCardContainer>
      </PokemonInfoCardDetail>
    </>
  );
};
