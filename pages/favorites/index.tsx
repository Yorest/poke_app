
import { useState, useEffect } from "react";
import { Layout } from "../../components/layouts";
import {FavoritePokemons, NoFavorites} from "../../components/ui/";

import { localFavorites } from "../../utils";

const FavoritePage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.Pokemons);
  }, []);

  return (
    <Layout title="Favorites page">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons}/>
      )}
    </Layout>
  );
};

export default FavoritePage;
