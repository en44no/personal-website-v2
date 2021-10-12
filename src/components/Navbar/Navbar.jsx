import React from 'react';
import { Flex, Spacer, Box, Text, Center, Container } from '@chakra-ui/react';
import ColorMode from './ColorMode';
import Links from './Links';

const Navbar = () => {
  return (
    <>
      <Box position='fixed' width='100%' mt='1rem'>
        <Container maxW='container.xl'>
          <Flex borderRadius='9px' boxShadow='base'>
            <Center>
              <Box p='4'>
                <Text fontWeight='bold'>Nahuel Márquez</Text>
              </Box>
            </Center>
            <Spacer />
            <Center>
              <Box>
                <Links />
              </Box>
            </Center>
            <Box p='4'>
              <ColorMode />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
