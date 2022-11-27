import { Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard">
      <Image
        w="10"
        src="https://uploaddeimagens.com.br/images/004/175/281/original/BlockBank.png?1669243790"
      />
    </Link>
  );
}
