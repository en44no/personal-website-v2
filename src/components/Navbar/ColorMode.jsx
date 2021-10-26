import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { Button, IconButton } from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        //boxShadow='sm'
        aria-label='toggleColorModeButton'
        mr='-3'
        w={'5%'}
        onClick={toggleColorMode}
      >
        <IconButton
          aria-label='toggleColorModeButton_'
          bg='transparent'
          isRound
          _hover={{
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.500)',
          }}
        >
          {colorMode === 'light' ? (
            <UilSun color='#000' />
          ) : (
            <UilMoon color='#fff' />
          )}
        </IconButton>
      </Button>
    </>
  );
};

export default ColorMode;
