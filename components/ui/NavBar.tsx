import {
  Button,
  Grid,
  Image,
  Link,
  Spacer,
  Text,
  useTheme,
} from "@nextui-org/react";
import React from "react";
import NextLink from "next/link";

export const NavBar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
        padding: "20px 20px",
        backgroundColor: theme?.colors.gray50.value,
      }}
    >

        <NextLink href="/" passHref>
          <Link>
            <Image src="/pokemon.svg" alt="Pickachu" width={408} height={150} />
          </Link>
        </NextLink>

        <NextLink href="/favorites" passHref>
          <Link>
            <Button auto color="gradient" rounded bordered ghost>
              Favorites
            </Button>
          </Link>
        </NextLink>
    
    </div>
  );
};
