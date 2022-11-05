import {
  Button,
  Image,
  Link,
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
        
      }}
    >
      <NextLink href="/" passHref>
        <Link  >
          <Image
            src="/pokemon.svg"
            alt="Logo Pokemon"
            width={408}
            height={150}
          />
        </Link>
      </NextLink>

      <NextLink href="/favorites" passHref>
      <a >
          <Button auto color="gradient" rounded bordered ghost>
            Favorites
          </Button>
        </a>
      </NextLink>
    </div>
  );
};
