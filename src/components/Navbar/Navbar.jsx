import React from 'react';
import { Flex, Spacer, Box, Center, Container } from '@chakra-ui/react';
import ColorMode from './ColorMode';
import Links from './Links';
import NavbarName from './NavbarName';
import Language from './Language';
import { useColorMode } from '@chakra-ui/color-mode';

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        position='fixed'
        width='100%'
        zIndex='100'
        pt='4'
        bg={colorMode === 'light' ? '#e3e3e3' : '#232a36'}
        display={{ base: 'none', md: 'block', lg: 'block', xl: 'block' }}
      >
        <Container maxW='container.xl'>
          <Flex>
            <Center>
              <Box>
                <NavbarName />
              </Box>
            </Center>
            <Spacer />
            <Center>
              <Box>
                <Links />
              </Box>
            </Center>
            <Box pt='2' pl='4' mr='-2'>
              <Language />
            </Box>
            <Box pt='2' pl='0'>
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
