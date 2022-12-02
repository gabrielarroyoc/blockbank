import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react";

import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

import { ReactNode } from "react";
import { useRouter } from "next/router";
import { supabase } from "../services/supabase";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";

const LoginPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const [data, setData] = useState();

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from("test").select("*");
      setData(data);
    }
    // Only run query once user is logged in.
    if (user) loadData();
  }, [user]);

  if (!user)
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
          <Image
            pr="60"
            h="300"
            src="https://uploaddeimagens.com.br/images/004/175/311/original/BlockBank-II.png?1669245859"
          />
        </Flex>
        <VStack mt="200" ml="500" align="center">
          <Text color="greenDefault.900" as="b" mt="20" fontSize="20">
            LOGIN
          </Text>
          <>
            <Auth
              redirectTo="http://localhost:3000/dashboard/"
              appearance={{ theme: ThemeSupa }}
              supabaseClient={supabaseClient}
              providers={["apple", "github"]}
              socialLayout="horizontal"
            />
          </>
        </VStack>
      </Flex>
    );
  return (
    <>
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
          <Image
            pr="60"
            h="300"
            src="https://uploaddeimagens.com.br/images/004/175/311/original/BlockBank-II.png?1669245859"
          />
        </Flex>
        <VStack mt="200" ml="500" align="center">
          <Button onClick={() => supabaseClient.auth.signOut()}>
            Sign Out
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default LoginPage;
