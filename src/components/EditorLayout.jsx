import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";

const EditorLayout = () => {
  return (
    <Flex height="100vh">
      <Sidebar />
      <Box flex="1" p={4}>
        <Canvas />
      </Box>
    </Flex>
  );
};

export default EditorLayout;