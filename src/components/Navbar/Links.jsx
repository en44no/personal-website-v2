import React from 'react';
import { Link, Box, Flex } from '@chakra-ui/react';

const Links = () => {
  return (
    <>
      <Flex>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>About</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>Contact</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>Skills</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>Projects</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
