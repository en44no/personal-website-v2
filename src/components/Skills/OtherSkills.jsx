import React from 'react';
import { DiNodejs } from 'react-icons/di';
import TechBox from './TechBox';
import { Text, Grid } from '@chakra-ui/react';
import {
  SiCsharp,
  SiGit,
  SiMongodb,
  SiBootstrap,
  SiExpress,
} from 'react-icons/si';

const OtherSkills = () => {
  return (
    <>
      <Text fontWeight='semibold' fontSize='lg' textAlign='center' pb='1.5rem'>
        I also used and have knowledge of the following technologies
      </Text>
      <Grid
        templateColumns='repeat(6, 1fr)'
        gap={6}
        position='relative'
        placeItems='center'
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
    </>
  );
};

export default OtherSkills;
