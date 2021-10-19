import React from 'react';
import { Container, Text, Grid } from '@chakra-ui/react';
import {
  SiChakraui,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCsharp,
  SiGit,
  SiMongodb,
  SiBootstrap,
  SiExpress,
} from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import TechBox from './TechBox';
import GoNextSection from '../GoNextSection';

const Skills = () => {
  return (
    <>
      <Container
        id='skills'
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
          My Skills
        </Text>
        <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
          I am currently working with
        </Text>
        <Grid
          templateColumns='repeat(5, 1fr)'
          gap={6}
          top='-15'
          position='relative'
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

        <Text position='absolute' top='55%' fontWeight='semibold' fontSize='lg'>
          I have also worked with
        </Text>
        <Grid
          templateColumns='repeat(6, 1fr)'
          gap={6}
          top='100'
          position='relative'
        >
          <TechBox
            techIcon={DiNodejs}
            techColor='#6DA55F'
            title='Node'
            link='https://nodejs.org/es/'
          />
          <TechBox
            techIcon={SiGit}
            techColor='#F05033'
            title='Git'
            link='https://git-scm.com/'
          />
          <TechBox
            techIcon={SiCsharp}
            techColor='#953DAC'
            title='CSharp'
            link='https://docs.microsoft.com/en-us/dotnet/csharp/'
          />
          <TechBox
            techIcon={SiMongodb}
            techColor='#71B35E'
            title='MongoDB'
            link='https://www.mongodb.com/'
          />
          <TechBox
            techIcon={SiBootstrap}
            techColor='#8B13FD'
            title='Bootstrap'
            link='https://getbootstrap.com/'
          />
          <TechBox
            techIcon={SiExpress}
            techColor='grey'
            title='Express'
            link='https://expressjs.com/es/'
          />
        </Grid>
        <GoNextSection section='home' />
      </Container>
    </>
  );
};

export default Skills;
