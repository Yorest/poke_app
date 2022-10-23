import { Grid, Spacer, Container } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import { useContext } from 'react';
import { pokemonContext } from './PokemonInfoCard';



export const PokemonInfoCardImage= () => {

  const {pokemon: {sprites, name}} = useContext(pokemonContext)


  return (
    <Grid
    xs={12}
    sm={5}
    md={4}
    xl={3}
    css={{ width: "100%", marginBottom: "-70px" }}
  >
    <Grid.Container>
      <Spacer />
      <Container display="flex" justify="center">
        <Image
          src={ sprites.other?.dream_world.front_default || "" }
          alt={`pokemon-${name}`}
          width={250}
          height={250}
        />
      </Container>
    </Grid.Container>
  </Grid>
  )
}
