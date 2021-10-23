import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '0px',
  md: '481px',
  lg: '961px',
  xl: '1799px',
  '2xl': '2899px',
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
        _focus: { boxShadow: 'base' },
        _active: { bg: 'transparent' },
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
          _active: { bg: 'transparent' },
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
        _focus: { boxShadow: 'base' },
      },
    },
  },
});

export default theme;

//HOW TO ADD VARIANTS
//variants: {
// 'social-button': {
//   mr: '1',
//   fontSize: '1.5rem',
// },
//The background of the Button varies depending on the variant used. So we need to override the bg / background property on the variant we are using. The default variant for Button is solid.
