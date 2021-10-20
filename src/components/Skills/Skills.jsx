import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import SectionNextButton from '../Section/SectionNextButton';
import CurrentlySkills from './CurrentlySkills';
import OtherSkills from './OtherSkills';
import { useTranslation } from 'react-i18next';
import SectionHeader from '../Section/SectionHeader';

const Skills = () => {
  const { t } = useTranslation();
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
        <SectionHeader title={t('MySkills.1')} />
        <Box
          w={{ base: '93%', md: '70%', lg: '70%' }}
          pb={{ base: '4rem', md: '2rem', lg: '2rem' }}
          position='relative'
          top={{ base: '2rem', md: '0', lg: '0' }}
        >
          <CurrentlySkills />
        </Box>
        <Box w={{ base: '93%', md: '80%', lg: '80%' }}>
          <OtherSkills />
        </Box>
        <Box mr='2.5rem' display={{ base: 'none', md: 'block', lg: 'block' }}>
          <SectionNextButton section='contact' />
        </Box>
      </Container>
    </>
  );
};

export default Skills;
