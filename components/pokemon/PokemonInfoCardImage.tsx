import { Grid, Spacer, Container } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

interface Props {
  url: string
  alt: string
}

export const PokemonInfoCardImage= ({url, alt}: Props) => {
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
          src={ url }
          alt={alt}
          width={250}
          height={250}
        />
      </Container>
    </Grid.Container>
  </Grid>
  )
}
