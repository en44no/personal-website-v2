import React from 'react';
import { useColorMode } from '@chakra-ui/color-mode';
import { IconButton } from '@chakra-ui/react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const ColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <IconButton
        ml="0.5rem"
        onClick={toggleColorMode}
        aria-label="toggleColorModeButton_"
        bg="transparent"
        _hover={{
          bgGradient: "linear(to-r, cyan.400, blue.500, purple.500)"
        }}
      >
        {colorMode === "light"
          ? (
            <UilMoon color="#000" />
          )
          : (
            <UilSun color="#fff" />
          )}
      </IconButton>
    </>
  );
};

export default ColorMode;
