import React from 'react';
import { Container, Text, Box } from '@chakra-ui/react';
import SectionHeader from '../SectionHeader';

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
        <SectionHeader title='Contact' />
        <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
          Estoy abierto a escuchar propuestas.
        </Text>
      </Container>
    </>
  );
};

export default Contact;
