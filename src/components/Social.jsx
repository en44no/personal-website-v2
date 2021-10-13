import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  return (
    <>
      <Flex alignSelf='flex-start' position='absolute' bottom='5'>
        <IconButton mr='1' fontSize='1.5rem'>
          <FaGithub />
        </IconButton>
        <IconButton mr='1' fontSize='1.5rem'>
          <FaLinkedin />
        </IconButton>
        <IconButton fontSize='1.5rem'>
          <FaEnvelope />
        </IconButton>
      </Flex>
    </>
  );
};

export default Social;
