import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  mobile: '0em', // 480px, Mobile devices
  tablet: '30em', // 768px, iPads, Tablets
  laptop: '48em', // 1024px, Small screens, laptops
  desktop: '64em', // 1200px, Desktops, large screens
  largeDesktop: '100em', // 1600px, Extra large screens, TV
});

const theme = extendTheme({
  config,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#e3e3e3', '#232a36')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: 'transparent',
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.500)',
          transition: 'transform 0.2s, all 0.2s ease-in-out',
          transform: 'scale(1.06)',
        },
      },
      variants: {
        solid: {
          bg: 'transparent',
          _hover: {
            bg: 'transparent',
            transition: 'all 0.2s ease-in-out',
          },
          _active: {
            bg: 'transparent',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        fontWeight: 'semibold',
        _hover: {
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
          transform: 'scale(1.06)',
          transition: 'transform 1s, all 0.2s ease-in-out',
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
