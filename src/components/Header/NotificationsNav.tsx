import { Button, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <HStack
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
      spacing={["6", "8"]}
    >
      <Button
        borderRadius="10px"
        bgColor="gray.900"
        _hover={{ bgColor: "gray.700" }}
        _active={{ bgColor: "gray.600" }}
      >
        <Icon as={RiNotificationLine} fontSize="20" />
      </Button>

      <Button
        borderRadius="10px"
        bgColor="gray.900"
        _hover={{ bgColor: "gray.700" }}
        _active={{ bgColor: "gray.600" }}
      >
        <Icon as={RiUserAddLine} fontSize="20" />
      </Button>
    </HStack>
  );
}
