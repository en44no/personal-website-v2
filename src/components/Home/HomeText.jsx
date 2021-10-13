import React from 'react';
import { Text, Box } from '@chakra-ui/react';

const HomeText = () => {
  return (
    <>
      <Box>
        <Text fontSize='6xl' fontWeight='semibold'>
          Hello, I'm
          <Text
            fontWeight='bold'
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            bgClip='text'
            mt='-2'
          >
            Nahuel Márquez
          </Text>
        </Text>
        <Text fontSize='3xl' fontWeight='semibold'>
          Front-end Developer
        </Text>
      </Box>
    </>
  );
};

export default HomeText;
