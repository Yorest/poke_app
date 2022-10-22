import { Container } from "@nextui-org/react";
import { FC, ReactNode } from "react";

import { BottonBack, ButtonFavorite } from "../ui/";

interface Props {
  id: number;
  children?: ReactNode;
}

export const PokemonInfoCardNav: FC<Props> = ({ id }) => {
  return (
    <Container
      css={{ width: "100%", marginTop: "20px" }}
      display="flex"
      justify="space-between"
      alignItems="center"
    >
      <BottonBack />
      <ButtonFavorite id={id} />
    </Container>
  );
};
