import {
  Flex,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Header } from "../components/Header";
import { Pagination } from "../components/Pagination";
import { PaginationItem } from "../components/Pagination/PaginationItem";
import { Sidebar } from "../components/Sidebar";
import { useUsers } from "../services/hooks/useUsers";

export default function Transactions() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <Table variant="simple">
          <TableCaption>Transações de hoje</TableCaption>
          <Thead>
            <Tr>
              <Th>Tipo</Th>
              <Th>Nome</Th>
              <Th isNumeric>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Empréstimo</Td>
              <Td>Banco</Td>
              <Td isNumeric>Aprovado</Td>
            </Tr>
            <Tr>
              <Td>Poupança</Td>
              <Td>Gabriel Arroyo</Td>
              <Td isNumeric>Efetuado</Td>
            </Tr>
            <Tr>
              <Td>Investimento</Td>
              <Td>PETR4</Td>
              <Td isNumeric>Efetuado</Td>
            </Tr>
          </Tbody>
        </Table>
      </Flex>
      <Pagination
        totalCountOfRegisters={200}
        currentPage={page}
        onPageChange={setPage}
      />
    </Flex>
  );
}
