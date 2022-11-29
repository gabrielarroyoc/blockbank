import {
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatNumber,
  Text,
} from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <HStack spacing={10}>
          <Card backgroundColor="gray.800" w="300px">
            <CardBody>
              <Stack align="left" mt="6" spacing="3">
                <Heading size="md" color="gray.100">
                  Saldo
                </Heading>
                <Stat>
                  <StatNumber color="gray.100">R$0.00</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    <Text color="gray.100"> 0.00%</Text>
                  </StatHelpText>
                </Stat>
              </Stack>
            </CardBody>
          </Card>
          <Card backgroundColor="gray.800" w="300px">
            <CardBody>
              <Stack align="left" mt="6" spacing="3">
                <Heading size="md" color="gray.100">
                  Entradas
                </Heading>

                <Stat>
                  <StatNumber color="gray.100">R$0.00</StatNumber>
                  <StatHelpText>
                    <StatArrow type="increase" />
                    <Text color="gray.100"> 0.00%</Text>
                  </StatHelpText>
                </Stat>
              </Stack>
            </CardBody>
          </Card>
          <Card backgroundColor="gray.800" w="300px">
            <CardBody>
              <Stack align="left" mt="6" spacing="3">
                <Heading size="md" color="gray.100">
                  Retiradas
                </Heading>

                <Stat>
                  <StatNumber color="gray.100">R$0.00</StatNumber>
                  <StatHelpText>
                    <StatArrow type="decrease" />
                    <Text color="gray.100"> 0.00%</Text>
                  </StatHelpText>
                </Stat>
              </Stack>
            </CardBody>
          </Card>
        </HStack>
      </Flex>
    </Flex>
  );
}
