import type { NextPage, GetStaticProps } from "next";
import { Grid, Card, Row, Text, Col } from "@nextui-org/react";

import { Layout } from "../components/layouts";
import { pokeApi } from "../api";
import { SmallPokemon } from "../interfaces/pokemon-lists";

import { pokeColorsType } from "../utils/colors";
import Image from "next/image";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Listado de Pokemons">
        <Grid.Container gap={2} justify="flex-start">
          {pokemons.map(({ id, name, img, type, height, hp, weight }) => (
            <Grid key={id} xs={6} sm={4} md={3} xl={3}>
              <Card
                isHoverable
                isPressable
                css={{
                  background: `linear-gradient(180deg, ${pokeColorsType[type]} 0%, rgba(255,255,255,1) 50%)`,
                  borderBottom: `15px solid ${pokeColorsType[type]}`,
                }}
              >
                <Card.Body css={{ p: 1 }}>
                  <Card.Image src={img} width="100%" height={250} alt={name} />
                </Card.Body>
                <Card.Footer>
                  <Grid.Container>
                    <Row gap={1} justify="space-between" align="center">
                      
                        <Text weight="bold" size="$xl" color="#697177">
                          # {id}
                        </Text>                      
                      
                        <Image
                          src={`/${type}.svg`}
                          alt={name}
                          width={112}
                          height={30}
                        />
                      
                    </Row>

                    <Row gap={1} justify="center" align="center">
                      <Text
                        size="$3xl"
                        weight="bold"
                        color="#000"
                        transform="capitalize"
                        css={{ m: 0 }}
                      >
                        {name}
                      </Text>
                    </Row>

                    <Row gap={1} justify="space-between" align="center">
                      <Text
                        size="$md"                        
                        color="#9BA1A6"
                        css={{ m: 0 }}
                      >
                        {`HP: ${hp}`}
                      </Text>

                      <Text
                        size="$md"                        
                        color="#9BA1A6"
                        css={{ m: 0 }}
                      >
                        {`HEIGHT: ${height}`}
                      </Text>

                      <Text
                        size="$md"                        
                        color="#9BA1A6"
                        css={{ m: 0 }}
                      >
                        {`WEIGHT: ${weight}`}
                      </Text>
                    </Row>
                  </Grid.Container>
                </Card.Footer>
              </Card>
            </Grid>
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
