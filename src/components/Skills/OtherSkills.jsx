import React from 'react';
import { DiNodejs } from 'react-icons/di';
import TechBox from './TechBox';
import { Text, Grid } from '@chakra-ui/react';
import { SiCsharp, SiMongodb, SiBootstrap, SiExpress } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

const OtherSkills = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text
        fontWeight='semibold'
        fontSize='lg'
        textAlign='center'
        mt={{ mobile: '-3rem', tablet: '-3rem', laptop: '0' }}
        pb='1.5rem'
      >
        {t('OtherSkills.1')}
      </Text>
      <Grid
        templateColumns={{
          mobile: 'repeat(3, 1fr)',
          tablet: 'repeat(4, 1fr)',
          laptop: 'repeat(5, 1fr)',
        }}
        gap={{
          mobile: '0',
          tablet: '0',
          laptop: '8',
        }}
        position='relative'
        placeItems='center'
        pb={{ mobile: '8rem', tablet: '8rem', laptop: '0' }}
      >
        <TechBox
          techIcon={DiNodejs}
          techColor='#6DA55F'
          title='Node'
          link='https://nodejs.org/es/'
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
