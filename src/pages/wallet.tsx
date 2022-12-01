import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Wallet() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex pt="12" w="100%" maxW={1480} mx="auto" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
}
