import { Container, Spacer, Text, Tooltip } from '@nextui-org/react'
import Image from 'next/image';
import React from 'react'
import { IevolutionChainList } from '../../interfaces';

interface Props {
  evolutionChain: IevolutionChainList[];
  id: number;
  name: string;
}

export const PokemonInfoCardEvolution = ({evolutionChain, id, name}: Props) => {
  return (
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
                {evolutionChain.map(({ id, name }) => (
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
                        name !== name
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
  )
}
