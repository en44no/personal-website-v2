import React from 'react';
import { Grid, Box } from '@chakra-ui/react';

import Addons from './Addons';
import Description from './Description';

const Content = () => (
  <>
    <Box
      w={{
        sm: "100%",
        md: "95%",
        lg: "100%",
        xl: "100%",
        xxl: "100%"
      }}
      mt={{ sm: "0", md: "0", lg: "10" }}
    >
      <Grid
        templateColumns="repeat(1, 1fr)"
        display="block"
        mt={{
          sm: "6rem",
          md: "0rem",
          lg: "0",
          xl: "0",
          xxl: "0"
        }}
      >
        <Box
          mb={{
            sm: null,
            md: null,
            lg: null,
            xl: "2rem",
            xxl: "2rem"
          }}
          alignSelf="center"
        >
          <Description />
        </Box>
        <Box alignSelf="center" mt={{ sm: "1rem", md: "1rem", lg: "0" }}>
          <Addons />
        </Box>
      </Grid>
    </Box>
  </>
);

export default Content;
