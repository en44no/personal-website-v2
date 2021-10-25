import { Box, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import CodeAndDemo from './CodeAndDemo';

const Header = (props) => {
  return (
    <>
      <Box>
        <>
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            fontSize='sm'
            color='#11BAE5'
          >
            {props.appType}
          </Box>
          <Flex>
            <Box mt='1' fontWeight='semibold' as='h4' fontSize='lg'>
              {props.appTitle}
            </Box>
            <Spacer />
            <CodeAndDemo codeLink={props.codeLink} demoLink={props.demoLink} />
          </Flex>
        </>
      </Box>
    </>
  );
};

export default Header;
