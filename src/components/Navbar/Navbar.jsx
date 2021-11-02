import React from 'react';
import {
  Flex, Spacer, Box, Center, Container,
} from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import ColorMode from './ColorMode';
import Links from './Links';
import NavbarName from './NavbarName';
import Language from './Language';

const Navbar = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        width="100%"
        zIndex="100"
        pt="4"
        bg={colorMode === 'light' ? '#e3e3e3' : '#232a36'}
        display={{
          mobile: 'none',
          tablet: 'none',
          laptop: 'block',
          desktop: 'block',
        }}
      >
        <Container maxW="container.xl">
          <Flex>
            <Center>
              <Box>
                <NavbarName goToTop="true" cursorPointer="true" />
              </Box>
            </Center>
            <Spacer />
            <Center>
              <Box>
                <Links />
              </Box>
            </Center>
            <Box as="button" pt="0" pl="4" mr="-2">
              <Language />
            </Box>
            <Box as="button" pt="0" pl="0">
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
