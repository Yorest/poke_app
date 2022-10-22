import React from 'react'
import { pokeApi } from '../api';
import { IPokemonSpecies, IpokemonChain, Chain } from '../interfaces';
import { IevolutionChainList, IPokemon } from '../interfaces/pokemon';

function evolutionChain(
  chain: Chain,
  evolutionChainList: Array<IevolutionChainList> = []
) {
  const url = chain.species.url.split("/");
  const id = url[6];

  evolutionChainList.push({ id, name: chain.species.name });
  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((chain) => {
      evolutionChain(chain, evolutionChainList);
    });
  }

  return evolutionChainList;
}

export const getPokemonInfo = async (nameOrId: string) => { 

  const { data } = await pokeApi.get<IPokemon>(
    `https://pokeapi.co/api/v2/pokemon/${nameOrId}`
  );

  const { data: specie } = await pokeApi.get<IPokemonSpecies>(
    `https://pokeapi.co/api/v2/pokemon-species/${nameOrId}`
  );

  const {
    data: { chain },
  } = await pokeApi.get<IpokemonChain>(specie.evolution_chain.url);

  

  return { ...data, evolutionChain: evolutionChain(chain) }
}
