import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => {
  return (
    <>
      <Box w='90%'>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} display='flex'>
          <Box alignSelf='center'>
            <Description />
          </Box>
          <Box alignSelf='center'>
            <Addons />
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Content;
