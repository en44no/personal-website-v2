import React from 'react';
import {
  Flex, Spacer, Box, Center, Container
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
        bg={colorMode === "light" ? "#e3e3e3" : "#232a36"}
        display={{
          sm: "none",
          md: "none",
          lg: "block",
          xl: "block"
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
            <Box mt="0.5rem" pt="0" pl="4" mr="-2">
              <Language />
            </Box>
            <Box mt="0.5rem" pt="0" pl="0">
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
