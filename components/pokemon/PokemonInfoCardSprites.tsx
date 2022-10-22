import { Container } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { Sprites } from "../../interfaces";


interface Props {
  sprites: Sprites; 
  name: string
}

export const PokemonInfoCardSprites = ({sprites, name}: Props) => {
  return (
    <Container display="flex" alignItems="center" justify="space-between">
      <Image
        src={sprites.front_default}
        alt={`front_default-${name}`}
        width={80}
        height={80}
      />

      <Image
        src={sprites.back_default}
        alt={`back_default-${name}`}
        width={80}
        height={80}
      />

      <Image
        src={sprites.front_shiny}
        alt={`front_shiny-${name}`}
        width={80}
        height={80}
      />

      <Image
        src={sprites.back_shiny}
        alt={`back_shiny-${name}`}
        width={80}
        height={80}
      />
    </Container>
  );
};
