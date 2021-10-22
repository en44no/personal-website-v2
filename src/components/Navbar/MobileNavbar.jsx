import React from 'react';
import { Flex, Spacer, Box, Center } from '@chakra-ui/react';
import { UilApps } from '@iconscout/react-unicons';
import { useColorMode } from '@chakra-ui/color-mode';
import NavbarName from './NavbarName';
import ColorMode from './ColorMode';
import Language from './Language';

const MobileNavbar = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box
        position='fixed'
        width='100%'
        height='auto'
        zIndex='100'
        bottom='0'
        left='0'
        pb='2'
        bg={colorMode === 'light' ? '#e3e3e3' : '#232a36'}
        display={{ base: 'block', md: 'none', lg: 'none', xl: 'none' }}
      >
        <Flex>
          <Center>
            <Box>
              <NavbarName />
            </Box>
          </Center>
          <Spacer />
          <Center></Center>
          <Box pt='2' mr='-2'>
            <Language />
          </Box>
          <Box pt='2' pl='0' pr='0'>
            <ColorMode />
          </Box>
          <Box pt='4' pr='4'>
            <UilApps />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default MobileNavbar;
