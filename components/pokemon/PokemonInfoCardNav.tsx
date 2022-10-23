import { Container } from "@nextui-org/react";
import { useContext } from "react";

import { BottonBack, ButtonFavorite } from "../ui/";
import { pokemonContext } from './PokemonInfoCard';


export const PokemonInfoCardNav = () => {

  const {pokemon: {id}} = useContext(pokemonContext)

  return (
    <Container
      css={{ width: "100%", marginTop: "20px" }}
      display="flex"
      justify="space-between"
      alignItems="center"
    >
      <BottonBack />
      <ButtonFavorite />
    </Container>
  );
};
