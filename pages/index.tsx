import type { NextPage, GetStaticProps } from "next";
import { Grid} from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { SmallPokemon } from "../interfaces/pokemon-lists";
import { PokemonCard } from "../components/pokemon";



interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </Grid.Container>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  );

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg

  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png

  const pokemons = await Promise.all(
    data.results.map(async (pokemon:{ name: string, url: string}, index: number) => {
      const type = await pokeApi.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );

      return {
        ...pokemon,
        id: index + 1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          index + 1
        }.png`,
        type: type.data.types[0].type.name,
        hp: type.data.stats[0].base_stat,
        height: type.data.height,
        weight: type.data.weight,
      };
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
