import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

const NavbarName = () => {
  return (
    <>
      <Box p='4'>
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
