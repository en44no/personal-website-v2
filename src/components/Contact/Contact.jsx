import React from 'react';
import { Container } from '@chakra-ui/react';
import SectionHeader from '../Section/SectionHeader';
import SectionSubtitle from '../Section/SectionSubtitle';

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
        <SectionSubtitle subtitle='....' />
      </Container>
    </>
  );
};

export default Contact;