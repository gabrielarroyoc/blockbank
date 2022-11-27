import {
  Box,
  Button,
  Flex,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { useForm, SubmitHandler, FieldError } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
  error?: FieldError;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  function handlerSubmit<SignInFormData>(data: SignInFormData) {
    console.log(data);
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
        <Stack align="center" spacing={4}>
          <Input
            error={errors.email}
            type="email"
            label="E-mail"
            {...register("email")}
          />

          <Input
            type="password"
            error={errors.password}
            label="Senha"
            {...register("password")}
          />
        </Stack>
        <Button type="submit" mt="6" bgColor="greenDefault.900">
          Entrar
        </Button>
      </VStack>
    </Flex>
  );
}
