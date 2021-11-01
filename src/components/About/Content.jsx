import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => (
  <>
    <Box
      w={{
        mobile: '95%', tablet: '95%', laptop: '100%', desktop: '100%', largeDesktop: '100%',
      }}
      mt={{ mobile: '0', tablet: '0', laptop: '10' }}
    >
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={6}
        display={{
          mobile: 'block', tablet: 'block', laptop: 'block', desktop: 'flex', largeDesktop: 'flex',
        }}
        mt={{
          mobile: '7rem', tablet: '7rem', laptop: '10', desktop: '0', largeDesktop: '0',
        }}
      >
        <Box alignSelf="center">
          <Description />
        </Box>
        <Box
          alignSelf="center"
          mt={{ mobile: '1rem', tablet: '1rem', laptop: '0' }}
        >
          <Addons />
        </Box>
      </Grid>
    </Box>
  </>
);

export default Content;
