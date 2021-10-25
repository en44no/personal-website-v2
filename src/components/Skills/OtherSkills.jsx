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
import { useTranslation } from 'react-i18next';

const OtherSkills = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text
        fontWeight='semibold'
        fontSize='lg'
        textAlign='center'
        mt={{ base: '-3rem', md: '0', lg: '0' }}
        pb='1.5rem'
      >
        {t('OtherSkills.1')}
      </Text>
      <Grid
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(6, 1fr)',
          lg: 'repeat(6, 1fr)',
        }}
        gap={{
          base: '0',
          md: '8',
          lg: '8',
        }}
        position='relative'
        placeItems='center'
        pb={{ base: '8rem', md: '0', lg: '0' }}
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
