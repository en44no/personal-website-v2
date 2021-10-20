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
        <Box w='70%' pb='2rem'>
          <CurrentlySkills />
        </Box>
        <Box w='80%'>
          <OtherSkills />
        </Box>
        <SectionNextButton section='contact' />
      </Container>
    </>
  );
};

export default Skills;
