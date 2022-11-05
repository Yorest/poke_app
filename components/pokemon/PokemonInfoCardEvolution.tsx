import { Container, Spacer, Text, Tooltip, Row, Grid } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'
import { useContext } from 'react';
import { pokemonContext } from './PokemonInfoCard';


export const PokemonInfoCardEvolution = () => {

  const {pokemon: {evolutionChain, name}} = useContext(pokemonContext)



  return (
    <Container>
              <Text weight={"bold"} size={"$xl"} color={"#000"}>
                Evolution chain
              </Text>
              <Spacer />
              <Container
                display="flex"
                alignItems="center"
                justify="space-around"
                wrap='nowrap'
                css={{p:0}}
              >
                {evolutionChain.map((evolution) => (
                  <Grid
                    key={`${evolution.id}-${evolution.name}`}                                     
                  >
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evolution.id}.png`}
                      width={70}
                      height={70}
                      alt={`${evolution.name}`}
                      style={
                        evolution.name !== name
                          ? {
                              filter: "grayscale(1) opacity(40%) ",
                              cursor: "pointer",
                            }
                          : { cursor: "pointer" }
                      }
                    />
                    <Text color='gray' >{`${evolution.name}`}</Text>
                  </Grid>
                ))}
              </Container>
              <Spacer />
            </Container>
  )
}
