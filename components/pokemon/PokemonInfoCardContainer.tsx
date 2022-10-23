import { Grid } from "@nextui-org/react";
import React, { FC, ReactElement } from "react";
import { pokeColorsType } from "../../utils";
import { useContext } from 'react';
import { pokemonContext } from "./PokemonInfoCard";

interface Props {

  children?: ReactElement | ReactElement[];
}

export const PokemonInfoCardContainer: FC<Props> = ({
  children,
}) => {

  const {pokemon: {types} } = useContext(pokemonContext)

  return (
    <Grid
      xs={12}
      sm={5}
      md={4}
      xl={3}
      css={{
        paddingTop: "$20",
        background: `linear-gradient(180deg, ${pokeColorsType[types[0].type.name]} 0%, rgba(255,255,255,1) 50%)`,
        borderBottom: `15px solid ${pokeColorsType[types[0].type.name]}`,
        borderRadius: "15px",
      }}
    >
      <Grid.Container>{children}</Grid.Container>
    </Grid>
  );
};
