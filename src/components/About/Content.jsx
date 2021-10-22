import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => {
  return (
    <>
      <Box
        w={{ base: '95%', md: '90%', lg: '90%' }}
        mt={{ base: '0', md: '10', lg: '10' }}
      >
        <Grid
          templateColumns='repeat(1, 1fr)'
          gap={6}
          display={{ base: 'block', md: 'flex', lg: 'flex' }}
          mt={{ base: '7rem', md: '0', lg: '0' }}
        >
          <Box alignSelf='center'>
            <Description />
          </Box>
          <Box alignSelf='center' mt={{ base: '0', md: '0', lg: '0' }}>
            <Addons />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Content;
