import React from 'react';
import { Link } from '@chakra-ui/react';

const Links = () => {
  return (
    <>
      <Link
        mr='1rem'
        fontWeight='semibold'
        _hover={{
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
        }}
      >
        About
      </Link>
      <Link
        mr='1rem'
        fontWeight='semibold'
        _hover={{
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
        }}
      >
        Contact
      </Link>
      <Link
        mr='1rem'
        fontWeight='semibold'
        _hover={{
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
        }}
      >
        Skills
      </Link>
      <Link
        fontWeight='semibold'
        _hover={{
          bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
          bgClip: 'text',
        }}
      >
        Projects
      </Link>
    </>
  );
};

export default Links;
