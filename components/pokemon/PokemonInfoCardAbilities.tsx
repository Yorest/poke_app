import { Container, Spacer, Grid, Text } from '@nextui-org/react'
import React from 'react'
import { pokeColorsType } from '../../utils'
import { useContext } from 'react';
import { pokemonContext } from './PokemonInfoCard';


export const PokemonInfoCardAbilities = () => {

  const {pokemon: {abilities, types}} = useContext(pokemonContext)


  return (
    <Container>
              <Spacer />
              <Text weight={"bold"} size={"$xl"} color={"#000"}>
                Abilities
              </Text>
              <Grid.Container gap={1}>
                {abilities.map(({ ability: { name } }) => (
                  <Grid key={name}>
                    <div
                      style={{
                        padding: "6px",
                        background: `${
                          pokeColorsType[types[0].type.name]
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
              <Spacer />
            </Container>
  )
}
