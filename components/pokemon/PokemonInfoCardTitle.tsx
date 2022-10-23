import { Container, Spacer, Grid, Card, Text } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { Type } from '../../interfaces';
import { useContext } from 'react';
import { pokemonContext } from './PokemonInfoCard';

export const PokemonInfoCardTitle = () => {


  const {pokemon: {id, name, types, weight, height}} = useContext(pokemonContext)


  return (
    <>
<Container
              css={{ width: "100%" }}
              display="flex"
              alignItems="center"
              justify="center"
            >
              <Text size={"$xl"} color="#697177">{`#${id}`}</Text>
              <Spacer />
              <Text
                h1
                weight={"bold"}
                size={"$5xl"}
                transform="capitalize"
                color="#000"
              >{` ${name}`}</Text>
            </Container>

            <Container justify="space-evenly" css={{ display: "flex" }}>
              {types.map(({ type: { name } }) => (
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
                        {`${weight / 10} Kg`}
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
                        {`${height / 10} m`}
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
    
    </>
  )
}
