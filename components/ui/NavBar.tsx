import { Image, Spacer, Text, useTheme } from '@nextui-org/react'
import React from 'react'

export const NavBar = () => {

  const {theme} = useTheme();


  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '20px 20px',
      backgroundColor: theme?.colors.gray50.value
    }}>

      <Image src="/pokemon.svg" alt="Pickachu" width={408} height={150} />    

    </div>
  )
}
