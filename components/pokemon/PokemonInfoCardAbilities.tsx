import { Container, Spacer, Grid, Text } from '@nextui-org/react'
import React from 'react'
import { Ability } from '../../interfaces';
import { pokeColorsType } from '../../utils'

interface Props {
  abilities: Ability[];
  PokemonType: string
}

export const PokemonInfoCardAbilities = ({abilities, PokemonType}: Props) => {
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
                          pokeColorsType[PokemonType]
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
