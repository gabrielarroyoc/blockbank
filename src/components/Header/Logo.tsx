import { Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/dashboard">
      <Image w="10" src="https://i.imgur.com/RXdgtIU.png" />
    </Link>
  );
}
