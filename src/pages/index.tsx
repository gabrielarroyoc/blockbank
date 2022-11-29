import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";

import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { ReactNode, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useRouter } from "next/router";

interface FormProps {
  children: ReactNode;
}

const Home = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const router = useRouter();
  const dashboard = router.query.id;

  return (
    <Flex bgColor="gray.900" w="100" h="100">
      <Flex
        maxW={1480}
        justifyContent="center"
        backgroundPosition="center"
        backgroundSize="1800px"
        filter="auto"
        brightness="85%"
        bgImage="https://i.imgur.com/3FLE98w.jpg"
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
        <>
          {!session ? (
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          ) : (
            { dashboard }
          )}
        </>
      </VStack>
    </Flex>
  );
};
export default Home;
