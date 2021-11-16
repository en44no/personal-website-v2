import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => (
  <>
    <Box
      w={{
        sm: '95%', md: '95%', lg: '100%', xl: '100%', xxl: '100%',
      }}
      mt={{ sm: '0', md: '0', lg: '10' }}
    >
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
        display={{
          sm: 'block', md: 'block', lg: 'block', xl: 'flex', xxl: 'flex',
        }}
        mt={{
          sm: '7rem', md: '7rem', lg: '10', xl: '0', xxl: '0',
        }}
      >
        <Box ml={{ lg: '7rem' }} alignSelf="center">
          <Description />
        </Box>
        <Box
          alignSelf="center"
          mt={{ sm: '1rem', md: '1rem', lg: '0' }}
          w={{ lg: '50%' }}
        >
          <Addons />
        </Box>
      </Grid>
    </Box>
  </>
);

export default Content;
