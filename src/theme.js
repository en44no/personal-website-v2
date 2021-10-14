import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
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
          transition: 'transform .2s',
          transform: 'scale(1.09)',
        },
      },
      variants: {
        solid: {
          bg: 'transparent',
          _hover: {
            bg: 'transparent',
          },
          _active: { bg: 'transparent' },
        },
      },
    },
    Link: {
      baseStyle: {
        mr: '1rem',
        fontWeight: 'semibold',
        _hover: {
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
          transition: 'transform 1s',
          transform: 'scale(1.09)',
        },
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
