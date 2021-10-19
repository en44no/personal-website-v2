import React from 'react';
import { Text, Grid } from '@chakra-ui/react';
import TechBox from './TechBox';
import {
  SiChakraui,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

const CurrentlySkills = () => {
  return (
    <>
      <Text fontWeight='semibold' fontSize='lg' textAlign='center' pb='1.5rem'>
        I am currently working with the following technologies
      </Text>
      <Grid
        templateColumns='repeat(5, 1fr)'
        position='relative'
        placeItems='center'
      >
        <TechBox
          techIcon={SiChakraui}
          techColor='#3FC7BF'
          title='Chakra UI'
          link='https://chakra-ui.com/'
        />
        <TechBox
          techIcon={SiReact}
          techColor='#61DAFB'
          title='React'
          link='https://es.reactjs.org/'
        />
        <TechBox
          techIcon={SiJavascript}
          techColor='#F7E018'
          title='JavaScript'
          link='https://developer.mozilla.org/es/docs/Web/JavaScript'
        />

        <TechBox
          techIcon={SiHtml5}
          techColor='#E54C21'
          title='HTML 5'
          link='https://developer.mozilla.org/es/docs/Glossary/HTML5'
        />
        <TechBox
          techIcon={SiCss3}
          techColor='#2965F1'
          title='CSS'
          link='https://developer.mozilla.org/es/docs/Web/CSS'
        />
      </Grid>
    </>
  );
};

export default CurrentlySkills;
