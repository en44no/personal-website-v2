import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import CodeAndDemo from './CodeAndDemo';

const Header = (props) => {
  const {
    appType, appTitle, codeLink, demoLink,
  } = props;

  return (
    <>
      <Box>
        <>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h6"
            fontSize="sm"
            color="#11BAE5"
          >
            {appType}
          </Box>
          <Flex>
            <Box mt="1" fontWeight="semibold" as="h5" fontSize="lg">
              {appTitle}
            </Box>
            <Spacer />
            <CodeAndDemo codeLink={codeLink} demoLink={demoLink} />
          </Flex>
        </>
      </Box>
    </>
  );
};

export default Header;
