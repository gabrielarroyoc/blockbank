import { Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";

import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <Flex bgColor="gray.900" w="100" h="100">
      <Flex
        maxW={1480}
        justifyContent="center"
        backgroundPosition="center"
        backgroundSize="1800px"
        filter="auto"
        brightness="85%"
        bgImage="https://uploaddeimagens.com.br/images/004/175/338/original/low-angle-businessman.jpg?1669246989"
        w="35%"
        h="100vh"
        borderTopRightRadius="28"
      >
        <VStack align="center">
          <Image
            pr="40"
            h="300"
            src="https://uploaddeimagens.com.br/images/004/175/311/original/BlockBank-II.png?1669245859"
          />
          <Text
            filter="auto"
            backdropBlur="10px"
            pl="14"
            mt="40"
            as="b"
            fontSize="48"
          >
            Acompanhe seus investimentos em um só lugar
          </Text>
          <Text pl="14" fontSize="48">
            Veja tudo agora mesmo
          </Text>
        </VStack>
      </Flex>
      <VStack mt="200" ml="500" align="center">
        <Text color="greenDefault.900" as="b" mt="20" fontSize="20">
          LOGIN
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button type="submit" mt="6" bgColor="greenDefault.900">
          Entrar
        </Button>
      </VStack>
    </Flex>
  );
}
