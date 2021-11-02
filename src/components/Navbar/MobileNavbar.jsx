import React from 'react';
import {
  Flex, Spacer, Box, Center, Button, Container,
} from '@chakra-ui/react';
import { ScaleFade } from '@chakra-ui/transition';
import { UilApps } from '@iconscout/react-unicons';
import { useColorMode } from '@chakra-ui/color-mode';
import NavbarName from './NavbarName';
import ColorMode from './ColorMode';
import Language from './Language';
import Links from './Links';

const MobileNavbar = () => {
  const { colorMode } = useColorMode();
  const [show, setShow] = React.useState(false);

  return (
    <>
      <Box
        as="nav"
        position="fixed"
        width="100%"
        height="auto"
        zIndex="100"
        bottom="0"
        left="0"
        pb="4"
        bg={colorMode === 'light' ? '#e3e3e3' : '#232a36'}
        display={{
          mobile: 'block',
          tablet: 'block',
          laptop: 'none',
          desktop: 'none',
        }}
      >
        <Box display={show ? 'block' : 'none'}>
          <ScaleFade direction="bottom" in={show}>
            <Container>
              <Box
                textAlign="center"
                justifyContent="center"
                display="flex"
                h="2.5rem"
                alignItems="center"
                fontSize="16px"
                onClick={() => setShow(false)}
              >
                <Links />
              </Box>
            </Container>
          </ScaleFade>
        </Box>
        <Flex>
          <Center>
            <Box>
              <NavbarName />
            </Box>
          </Center>
          <Spacer />
          <Center />
          <Box as="button" pt="0" mr="-2">
            <Language />
          </Box>
          <Box as="button" pt="0" pl="0" pr="0">
            <ColorMode />
          </Box>
          <Box as="button" pt="0" pr="3" ml="-3">
            <Button onClick={() => setShow(!show)}>
              <UilApps />
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MobileNavbar;
