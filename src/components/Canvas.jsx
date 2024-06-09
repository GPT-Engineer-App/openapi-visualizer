import { Box } from "@chakra-ui/react";
import { useDrop } from "react-dnd";

const Canvas = () => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "component",
    drop: (item, monitor) => {
      console.log("Dropped item:", item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <Box
      ref={drop}
      flex="1"
      bg={isOver ? "gray.200" : "white"}
      p={4}
      border="1px solid #ddd"
      minH="400px"
    >
      Drop components here
    </Box>
  );
};

export default Canvas;