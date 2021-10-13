import React from 'react';
import { Flex, Spacer, Box, Text, Center, Container } from '@chakra-ui/react';
import ColorMode from './ColorMode';
import Links from './Links';
import NavbarName from './NavbarName';

const Navbar = () => {
  return (
    <>
      <Box
        position='fixed'
        width='100%'
        mt='1rem'
        _hover={{
          transition: 'transform .2s',
          transform: 'scale(1.01)',
        }}
      >
        <Container maxW='container.xl'>
          <Flex borderRadius='9px' boxShadow='md'>
            <Center>
              <NavbarName />
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
