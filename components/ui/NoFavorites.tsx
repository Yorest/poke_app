import React from 'react'
import { Container, Text } from '@nextui-org/react'

export const NoFavorites = () => {
  return (
    <Container css={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 100px)',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}  
    >
      <Text h1 > there are no favorites </Text>
    </Container>
  )
}
