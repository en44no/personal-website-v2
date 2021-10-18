import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

const NavbarName = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Box p='4' onClick={() => goToTop()}>
        <Text
          fontWeight='bold'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.500)'
          bgClip='text'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            ml: '0.5',
          }}
          cursor='pointer'
        >
          Nahuel Márquez
        </Text>
      </Box>
    </>
    //
  );
};

export default NavbarName;
