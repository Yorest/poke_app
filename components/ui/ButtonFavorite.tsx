import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import { localFavorites } from "../../utils";

interface Props {
  id: number
}

export const ButtonFavorite = ({id}: Props) => {

  const [isInFavorites, setIsInFavorites] = useState(
    localFavorites.isInFavorites(id)
  );

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(id);
    setIsInFavorites(!isInFavorites);
  };
  
  return (
    <Button
      auto
      color="gradient"
      rounded
      bordered={!isInFavorites}
      ghost={!isInFavorites}
      onClick={onToggleFavorite}
    >
      {isInFavorites ? `in favorites` : `save to favorites`}
    </Button>
  )
}
