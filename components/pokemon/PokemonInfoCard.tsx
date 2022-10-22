interface Props {
  pokemon: IPokemon;
}

export const PokemonInfoCard = ({pokemon}) => {
  return (
    <Layout title={`${pokemon.name}`}>

    </Layout>
  )
}
