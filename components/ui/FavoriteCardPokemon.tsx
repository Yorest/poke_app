import React from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemonID: number;
}

export const FavoriteCardPokemon = ({ pokemonID }: Props) => {
  
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonID}`);
  };

  return (
    <Grid xs={6} sm={6} md={4} xl={3}>
      <Card isHoverable isPressable css={{ padding: "10px" }} onClick={onFavoriteClicked} >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`}
          alt={`${pokemonID}`}
          width={"100%"}
          height={240}
        />
      </Card>
    </Grid>
  );
};
