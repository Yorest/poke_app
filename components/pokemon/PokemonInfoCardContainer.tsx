import { Grid } from "@nextui-org/react";
import React, { FC, ReactElement } from "react";
import { pokeColorsType } from "../../utils";

interface Props {
  pokemonType: string;
  children?: ReactElement | ReactElement[];
}

export const PokemonInfoCardContainer: FC<Props> = ({
  pokemonType,
  children,
}) => {
  return (
    <Grid
      xs={12}
      sm={5}
      md={4}
      xl={3}
      css={{
        paddingTop: "$20",
        background: `linear-gradient(180deg, ${pokeColorsType[pokemonType]} 0%, rgba(255,255,255,1) 50%)`,
        borderBottom: `15px solid ${pokeColorsType[pokemonType]}`,
        borderRadius: "15px",
      }}
    >
      <Grid.Container>{children}</Grid.Container>
    </Grid>
  );
};
