import { Grid } from '@nextui-org/react';
import { ReactElement } from "react"

interface Props {
  children?: ReactElement | ReactElement[];
}

export const PokemonInfoCardDetail = ({children}: Props) => {

  return (
    
    <Grid.Container alignItems="center" direction="column">
        {children}
    </Grid.Container>

  )
}
