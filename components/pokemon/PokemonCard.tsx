import { FC } from "react";
import { Card, Grid,Text,Row } from "@nextui-org/react";
import Image from "next/image";

import { SmallPokemon } from "../../interfaces/pokemon-lists";
import { pokeColorsType } from "../../utils/colors";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {

  const  {id, name, img, type, height, hp, weight } = pokemon;

  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid xs={12} sm={6} md={4} xl={3}>
      <Card
        isHoverable
        isPressable
        css={{
          background: `linear-gradient(180deg, ${pokeColorsType[type]} 0%, rgba(255,255,255,1) 50%)`,
          borderBottom: `15px solid ${pokeColorsType[type]}`,
        }}
        onPress={onClick}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image showSkeleton={true} src={img} width="100%" height={250} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Grid.Container>
            <Row gap={1} justify="space-between" align="center">
              <Text weight="bold" size="$xl" color="#697177">
                # {id}
              </Text>

              <Image src={`/${type}.svg`} alt={name} width={112} height={30} />
            </Row>

            <Row gap={1} justify="center" align="center">
              <Text
                size="$3xl"
                weight="bold"
                color="#000"
                transform="capitalize"
                css={{ m: 0 }}
              >
                {name}
              </Text>
            </Row>

            <Row gap={1} justify="space-between" align="center">
              <Text size="$md" color="#9BA1A6" css={{ m: 0 }}>
                {`HP: ${hp}`}
              </Text>

              <Text size="$md" color="#9BA1A6" css={{ m: 0 }}>
                {`HEIGHT: ${(height/10)} m`}
              </Text>

              <Text size="$md" color="#9BA1A6" css={{ m: 0 }}>
                {`WEIGHT: ${(weight/10)} Kg`}
              </Text>
            </Row>
          </Grid.Container>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
