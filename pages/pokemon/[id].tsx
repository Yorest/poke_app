
import { GetStaticProps,GetStaticPaths, NextPage } from 'next'
import React from 'react'
import { pokeApi } from '../../api'

import { Layout } from '../../components/layouts'
import { IPokemon } from '../../interfaces/pokemon';

interface Props{
  pokemon: IPokemon
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {

  return (
    <Layout title='pokemon'>
        <h1>Hola</h1>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const pokemonListId = [...Array(151)].map((v,i)=> `${i+1}`);

  return {
    paths: pokemonListId.map((id => ({params: {id}}))),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({params}) => {

const {id} = params as { id: string }

  const { data } = await pokeApi.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );  

  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage