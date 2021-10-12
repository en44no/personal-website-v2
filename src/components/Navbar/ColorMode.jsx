import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        //boxShadow='base'
        bg='transparent'
        aria-label='lightModeButton'
        mr='-3'
        w={'5%'}
        _focus={{ boxShadow: 'base' }}
        onClick={toggleColorMode}
      >
        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
      </Button>
    </>
  );
};

export default ColorMode;
