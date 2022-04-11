import { extendTheme } from '@chakra-ui/react';
import { mode, createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
};

const breakpoints = createBreakpoints({
  sm: '0em', // 0px to 479px, Mobile devices
  md: '30em', // 480px to 767px, iPads, Tablets
  lg: '48em', // 768px to 1023px, Small screens, laptops
  xl: '64em', // 1024px to 1599px, Desktops, large screens
  xxl: '100em' // 1600px to infinite, Extra large screens, TV
});

const theme = extendTheme({
  config,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#e3e3e3', '#232a36')(props),
        color: mode('black', 'white')(props)
      }
    })
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          bg: 'transparent',
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.500)',
          transition: 'transform 0.2s, all 0.2s ease-in-out',
          transform: 'scale(1.06)'
        }
      },
      variants: {
        solid: {
          bg: 'transparent',
          _hover: {
            bg: 'transparent',
            transition: 'all 0.2s ease-in-out'
          },
          _active: {
            bg: 'transparent'
          }
        }
      }
    },
    Link: {
      baseStyle: {
        fontWeight: 'semibold',
        _hover: {
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
          transform: 'scale(1.06)',
          transition: 'transform 1s, all 0.2s ease-in-out',
          textDecoration: 'none'
        }
      }
    }
  }
});

export default theme;
