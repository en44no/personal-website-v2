import React from 'react';
import { Link } from '@chakra-ui/react';

const Links = () => {
  return (
    <>
      <Link mr='1rem' fontWeight='semibold'>
        About
      </Link>
      <Link mr='1rem' fontWeight='semibold'>
        Contact
      </Link>
      <Link mr='1rem' fontWeight='semibold'>
        Skills
      </Link>
      <Link fontWeight='semibold'>Projects</Link>
    </>
  );
};

export default Links;
