import { Container, Text, VStack } from "@chakra-ui/react";
import EditorLayout from "../components/EditorLayout";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <EditorLayout />
    </Container>
  );
};

export default Index;