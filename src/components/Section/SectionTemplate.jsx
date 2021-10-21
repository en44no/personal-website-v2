import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import SectionHeader from './SectionHeader';
import SectionSubtitle from './SectionSubtitle';
import SectionNextButton from './SectionNextButton';

//Si quieres crear una seccion, debes llamar al componente y envolver el contenido dentro de el, luego hay que pasarle como props lo siguiente: id, title, subtitle, sectionNextButton('la seccion a la que quieres redirigir)
const SectionTemplate = (props) => {
  return (
    <>
      <Container
        id={props.id}
        maxW='container.xl'
        height='100vh'
        width='100%'
        position='relative'
        display='flex'
        flexDirection='column'
      >
        {props.title ? (
          <Box
            textAlign='center'
            h='2rem'
            position='relative'
            top='6rem'
            mb='1rem'
          >
            <SectionHeader title={props.title} />
          </Box>
        ) : null}
        {props.subtitle ? (
          <Box textAlign='center' h='2rem' position='relative' top='6rem'>
            <SectionSubtitle subtitle={props.subtitle} />
          </Box>
        ) : null}
        {props.children ? (
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            height='100%'
            width='100%'
          >
            {props.children}
          </Box>
        ) : null}
        {props.sectionNextButton ? (
          <Box textAlign='center' position='relative' bottom='2rem'>
            <SectionNextButton section={props.sectionNextButton} />
          </Box>
        ) : null}
      </Container>
    </>
  );
};

export default SectionTemplate;
