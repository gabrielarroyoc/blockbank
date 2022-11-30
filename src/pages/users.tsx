import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  Spacer,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Users() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <VStack>
          <InputGroup gap="2" flexDirection="column">
            <Input
              color="gray.50"
              variant="filled"
              px="4"
              placeholder="Name"
              _placeholder={{ color: "gray.400" }}
            />

            <Input
              color="gray.50"
              variant="filled"
              px="4"
              placeholder="E-mail"
              _placeholder={{ color: "gray.400" }}
            />

            <Input
              color="gray.50"
              variant="filled"
              px="4"
              placeholder="Number"
              _placeholder={{ color: "gray.400" }}
            />
          </InputGroup>
        </VStack>
      </Flex>
    </Flex>
  );
}
