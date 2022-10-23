import { Container, Grid, Spacer, Progress, Text } from '@nextui-org/react'
import React from 'react'
import { useContext } from 'react';
import { pokemonContext } from './PokemonInfoCard';


export const PokemonInfoCardStats = () => {


  const {pokemon: {stats}} = useContext(pokemonContext)

  return (
    <Container>
    <Text weight={"bold"} size={"$xl"} color={"#000"}>
      Stats
    </Text>

    {stats.map(({ stat, base_stat }) => (
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
  )
}
