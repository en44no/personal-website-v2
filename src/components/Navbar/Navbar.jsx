import React from 'react';
import { Flex, Spacer, Box, Center, Container } from '@chakra-ui/react';
import ColorMode from './ColorMode';
import Links from './Links';
import NavbarName from './NavbarName';
import Language from './Language';

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
          <Flex borderRadius='9px' boxShadow='lg'>
            <Center>
              <NavbarName />
            </Center>
            <Spacer />
            <Center>
              <Box>
                <Links />
              </Box>
            </Center>
            <Box pt='4' pl='4' mr='-2'>
              <Language />
            </Box>
            <Box p='4' pl='0' pr='0'>
              <ColorMode />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
    //
  );
};

export default Navbar;
