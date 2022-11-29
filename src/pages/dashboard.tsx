import dynamic from "next/dynamic";
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
  theme,
  VStack,
} from "@chakra-ui/react";
import ApexCharts from "apexcharts";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-18T00:00:00.000Z",
      "2022-03-19T00:00:00.000Z",
      "2022-03-20T00:00:00.000Z",
      "2022-03-21T00:00:00.000Z",
      "2022-03-22T00:00:00.000Z",
      "2022-03-23T00:00:00.000Z",
      "2022-03-24T00:00:00.000Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 51, 18, 109],
  },
];

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
      <VStack>
        <HStack ml="120" spacing={4} mt="20" maxW={1480}>
          <Card backgroundColor="gray.800" h="250px" w="480px">
            <Heading p="4" color="gray.100" size="md">
              Balanço
            </Heading>
            <Chart
              options={options}
              series={series}
              type="area"
              height={170}
            ></Chart>
          </Card>
          <Card backgroundColor="gray.800" h="250px" w="480px">
            <Heading p="4" color="gray.100" size="md">
              Balanço
            </Heading>
            <Chart
              options={options}
              series={series}
              type="area"
              height={170}
            ></Chart>
          </Card>
        </HStack>
      </VStack>
    </Flex>
  );
}
