import React, { useState } from "react";

import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { Spacer } from "@nextui-org/react";

import { pokeApi } from "../../api";
import { getPokemonInfo, localFavorites } from "../../utils";

import { IPokemon } from "../../interfaces";
import { PokemonListResponse } from "../../interfaces/pokemon-lists";

import { Layout } from "../../components/layouts";
import {
  PokemonInfoCard,
  PokemonInfoCardAbilities,
  PokemonInfoCardContainer,
  PokemonInfoCardDetail,
  PokemonInfoCardEvolution,
  PokemonInfoCardImage,
  PokemonInfoCardNav,
  PokemonInfoCardSprites,
  PokemonInfoCardStats,
  PokemonInfoCardTitle,
} from "../../components/pokemon";


interface Props {
  pokemon: IPokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.isInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);
  };

  return (
    <Layout title={`${pokemon.name}`}>
      <PokemonInfoCard
        pokemon={pokemon}
        onToggleFavorite={onToggleFavorite}
        isInFavorites={isInFavorites}
      >
        <PokemonInfoCardNav />
        <PokemonInfoCardDetail>
          <PokemonInfoCardImage />
          <PokemonInfoCardContainer>
            <PokemonInfoCardTitle />
            <PokemonInfoCardStats />
            <PokemonInfoCardAbilities />
            <PokemonInfoCardSprites />
            <PokemonInfoCardEvolution />
          </PokemonInfoCardContainer>
        </PokemonInfoCardDetail>
      </PokemonInfoCard>
      <Spacer />
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );
  const pokemonListName: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonListName.map((name) => ({ params: { name } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if(!pokemon){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
