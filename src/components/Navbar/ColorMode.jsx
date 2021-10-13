import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        //boxShadow='base'
        aria-label='toggleColorModeButton'
        mr='-3'
        w={'5%'}
        onClick={toggleColorMode}
      >
        <IconButton
          bg='transparent'
          isRound
          _hover={{
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.500)',
          }}
          _focus={{ boxShadow: 'base' }}
        >
          {colorMode === 'light' ? (
            <SunIcon color='#000' />
          ) : (
            <MoonIcon color='#fff' />
          )}
        </IconButton>
      </Button>
    </>
  );
};

export default ColorMode;
