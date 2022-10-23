import React, { useContext  } from 'react'

import { Button } from '@nextui-org/react'

import { pokemonContext } from '../pokemon/';

export const ButtonFavorite = () => {  

  const {isInFavorites, onToggleFavorite} = useContext(pokemonContext)
  
  return (
    <Button
      auto
      color="gradient"
      rounded
      bordered={!isInFavorites}
      ghost={!isInFavorites}
      onPress={onToggleFavorite}
    >
      {isInFavorites ? `in favorites` : `save to favorites`}
    </Button>
  )
}
