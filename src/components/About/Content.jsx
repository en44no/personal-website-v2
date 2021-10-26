import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => {
  return (
    <>
      <Box
        w={{ sm: '95%', md: '95%', lg: '90%' }}
        mt={{ sm: '0', md: '0', lg: '10' }}
      >
        <Grid
          templateColumns='repeat(1, 1fr)'
          gap={6}
          display={{ sm: 'block', md: 'block', lg: 'flex' }}
          mt={{ sm: '7rem', md: '7rem', lg: '0' }}
        >
          <Box alignSelf='center'>
            <Description />
          </Box>
          <Box alignSelf='center' mt={{ sm: '1rem', md: '1rem', lg: '0' }}>
            <Addons />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Content;
