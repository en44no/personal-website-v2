import React from 'react';
import { IconButton, Flex, Container } from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const Social = () => {
  return (
    <>
      <Container maxW='container.xl'>
        <Flex position='fixed' bottom='5'>
          <IconButton isRound mr='1' bg='transparent' fontSize='1.5rem'>
            <FaGithub />
          </IconButton>
          <IconButton isRound mr='1' bg='transparent' fontSize='1.5rem'>
            <FaLinkedinIn />
          </IconButton>
          <IconButton isRound bg='transparent' fontSize='1.5rem'>
            <FaEnvelope />
          </IconButton>
        </Flex>
      </Container>
    </>
  );
};

export default Social;
