import React from "react";
import NextLink from "next/link";
import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

export const BottonBack = () => {
  return (
    <NextLink href="/" passHref>
      <Link>
        <Button
          auto
          color="gradient"
          rounded
          bordered
          ghost
          icon={
            <Image
              src={`/left-arrow.svg`}
              alt="left-arrow"
              width={20}
              height={20}
              color="white"
            />
          }
        >
          Back
        </Button>
      </Link>
    </NextLink>
  );
};
