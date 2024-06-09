import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box w="250px" bg="gray.100" p={4} borderRight="1px solid #ddd">
      <Heading size="md" mb={4}>Components</Heading>
      <VStack align="start" spacing={3}>
        <Text>Path</Text>
        <Text>Schema</Text>
        <Text>Response</Text>
      </VStack>
    </Box>
  );
};

export default Sidebar;