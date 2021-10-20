import React from 'react';
import { Container, Text, Box } from '@chakra-ui/react';

const Contact = () => {
  return (
    <>
      <Container
        id='contact'
        maxW='container.xl'
        display='flex'
        position='relative'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        width='100%'
        flexDirection='column'
      >
        <Text
          position='absolute'
          top='13%'
          fontWeight='bold'
          fontSize='2xl'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'
        >
          Contact
        </Text>
        <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
          Estoy abierto a escuchar propuestas.
        </Text>
      </Container>
    </>
  );
};

export default Contact;
