import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const NavbarName = (props) => {
  const { cursorPointer, goToTop } = props;
  const goToTopFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box p="4">
        <Text
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
          bgClip="text"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            ml: '0.5',
          }}
          onClick={goToTop ? () => goToTopFunction() : null}
          cursor={cursorPointer ? () => 'pointer' : null}
        >
          Nahuel Márquez
        </Text>
      </Box>
    </>
    //
  );
};

export default NavbarName;
