import {
  Link,
  Button,
  Card,
  Container,
  Grid,
  Progress,
  Spacer,
  Text,
  Tooltip,
} from "@nextui-org/react";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import React from "react";
import { pokeApi } from "../../api";

import { Layout } from "../../components/layouts";
import {
  IPokemonSpecies,
  IpokemonChain,
  IPokemon,
  Chain,
  IevolutionChainList,
} from "../../interfaces";

import { pokeColorsType } from "../../utils/colors";

interface Props {
  pokemon: IPokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={`${pokemon.name}`}>
      <Grid.Container alignItems="center" direction="column">
        <Grid
          xs={12}
          sm={5}
          md={4}
          xl={3}
          css={{ marginTop: "20px", width: "100%", marginBottom: "-70px" }}
        >
          <Grid.Container>
            <Container
              css={{ width: "100%" }}
              display="flex"
              justify="space-between"
              alignItems="center"
            >
              <NextLink href="/" passHref>
                <Link>
                  <Button
                    auto
                    color="gradient"
                    rounded
                    bordered
                    ghost
                    icon={
                      <Image
                        src={`/left-arrow.svg`}
                        alt="left-arrow"
                        width={20}
                        height={20}
                        color="white"
                      />
                    }
                  >
                    Back
                  </Button>
                </Link>
              </NextLink>
              <NextLink href="/favorites" passHref>
                <Link>
                  <Button auto color="gradient" rounded bordered ghost>
                    {`Guardar en Favoritos`}
                  </Button>
                </Link>
              </NextLink>
            </Container>
            <Spacer />
            <Container display="flex" justify="center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default || ""}
                alt={`pokemon-${pokemon.name}`}
                width={250}
                height={250}
              />
            </Container>
          </Grid.Container>
        </Grid>

        <Grid
          xs={12}
          sm={5}
          md={4}
          xl={3}
          css={{
            paddingTop: "$20",
            background: `linear-gradient(180deg, ${
              pokeColorsType[pokemon.types[0].type.name]
            } 0%, rgba(255,255,255,1) 50%)`,
            borderBottom: `15px solid ${
              pokeColorsType[pokemon.types[0].type.name]
            }`,
            borderRadius: "15px",
          }}
        >
          <Grid.Container>
            <Container
              css={{ width: "100%" }}
              display="flex"
              alignItems="center"
              justify="center"
            >
              <Text size={"$xl"} color="#697177">{`#${pokemon.id}`}</Text>
              <Spacer />
              <Text
                h1
                weight={"bold"}
                size={"$5xl"}
                transform="capitalize"
                color="#000"
              >{` ${pokemon.name}`}</Text>
            </Container>

            <Container justify="space-evenly" css={{ display: "flex" }}>
              {pokemon.types.map(({ type: { name } }) => (
                <Image
                  key={name}
                  src={`/${name}.svg`}
                  alt={name}
                  width={112}
                  height={30}
                />
              ))}
            </Container>

            <Container>
              <Grid.Container
                gap={4}
                css={{ display: "flex", justifyContent: "space-around" }}
              >
                <Grid>
                  <Card css={{ background: "$accents9" }}>
                    <Card.Body>
                      <Text
                        weight={"bold"}
                        color="#2B2F31"
                        size={"$2xl"}
                        css={{ display: "flex", justifyContent: "center" }}
                      >
                        {`${pokemon.weight / 10} Kg`}
                      </Text>
                      <Text
                        color="#9BA1A6"
                        css={{ display: "flex", justifyContent: "center" }}
                      >
                        Weight
                      </Text>
                    </Card.Body>
                  </Card>
                </Grid>

                <Grid>
                  <Card css={{ background: "$accents9" }}>
                    <Card.Body>
                      <Text
                        weight={"bold"}
                        color="#2B2F31"
                        size={"$2xl"}
                        css={{ display: "flex", justifyContent: "center" }}
                      >
                        {`${pokemon.height / 10} m`}
                      </Text>
                      <Text
                        color="#9BA1A6"
                        css={{ display: "flex", justifyContent: "center" }}
                      >
                        Height
                      </Text>
                    </Card.Body>
                  </Card>
                </Grid>
              </Grid.Container>
            </Container>

            <Container>
              <Text weight={"bold"} size={"$xl"} color={"#000"}>
                Stats
              </Text>

              {pokemon.stats.map(({ stat, base_stat }) => (
                <Grid
                  key={stat.name}
                  css={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    css={{ width: "40%" }}
                    transform="capitalize"
                    color="#787F85"
                  >
                    {stat.name}
                  </Text>
                  <Spacer />
                  <Text css={{ width: "10%" }} color="#787F85">
                    {base_stat}
                  </Text>
                  <Spacer />
                  <Progress
                    css={{ flexGrow: 1, width: "50%" }}
                    size="sm"
                    color="gradient"
                    value={base_stat}
                    max={200}
                  />
                </Grid>
              ))}
            </Container>

            <Container>
              <Spacer />
              <Text weight={"bold"} size={"$xl"} color={"#000"}>
                Abilities
              </Text>
              <Grid.Container gap={1}>
                {pokemon.abilities.map(({ ability: { name } }) => (
                  <Grid key={name}>
                    <div
                      style={{
                        padding: "6px",
                        background: `${
                          pokeColorsType[pokemon.types[0].type.name]
                        }`,
                        borderRadius: "50px",
                      }}
                    >
                      <span
                        style={{
                          padding: "6px",
                          fontSize: "16px",
                          color: "white",
                        }}
                      >
                        {name}
                      </span>
                    </div>
                  </Grid>
                ))}
              </Grid.Container>
            </Container>

            <Spacer />
            <Container
              display="flex"
              alignItems="center"
              justify="space-between"
            >
              <Image
                src={pokemon.sprites.front_default}
                alt={`front_default-${pokemon.name}`}
                width={80}
                height={80}
              />

              <Image
                src={pokemon.sprites.back_default}
                alt={`back_default-${pokemon.name}`}
                width={80}
                height={80}
              />

              <Image
                src={pokemon.sprites.front_shiny}
                alt={`front_shiny-${pokemon.name}`}
                width={80}
                height={80}
              />

              <Image
                src={pokemon.sprites.back_shiny}
                alt={`back_shiny-${pokemon.name}`}
                width={80}
                height={80}
              />
            </Container>

            <Container>
              <Text weight={"bold"} size={"$xl"} color={"#000"}>
                Evolution chain
              </Text>
              <Spacer />
              <Container
                display="flex"
                alignItems="center"
                justify="space-between"
              >
                {pokemon.evolutionChain.map(({ id, name }) => (
                  <Tooltip
                    key={`${id}-${name}`}
                    content={`${name}`}
                    trigger="click"
                    placement="top"
                    css={{}}
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                      width={70}
                      height={70}
                      alt={`${name}`}
                      style={
                        pokemon.name !== name
                          ? {
                              filter: "grayscale(1) opacity(40%) ",
                              cursor: "pointer",
                            }
                          : { cursor: "pointer" }
                      }
                    />
                  </Tooltip>
                ))}
              </Container>
              <Spacer />
            </Container>
          </Grid.Container>
        </Grid>
        <Spacer />
      </Grid.Container>
    </Layout>
  );
};

function evolutionChain(
  chain: Chain,
  evolutionChainList: Array<IevolutionChainList> = []
) {
  const url = chain.species.url.split("/");
  const id = url[6];

  evolutionChainList.push({ id, name: chain.species.name });
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((chain) => {
      evolutionChain(chain, evolutionChainList);
    });
  }

  return evolutionChainList;
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonListId = [...Array(151)].map((v, i) => `${i + 1}`);

  return {
    paths: pokemonListId.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  const { data: specie } = await pokeApi.get<IPokemonSpecies>(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const {
    data: { chain },
  } = await pokeApi.get<IpokemonChain>(specie.evolution_chain.url);

  return {
    props: {
      pokemon: { ...data, evolutionChain: evolutionChain(chain) },
    },
  };
};

export default PokemonPage;
