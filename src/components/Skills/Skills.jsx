import React from 'react';
import { Container, Text, Box } from '@chakra-ui/react';
import GoNextSection from '../GoNextSection';
import CurrentlySkills from './CurrentlySkills';
import OtherSkills from './OtherSkills';
import { useTranslation } from 'react-i18next';

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
        <Text
          position='absolute'
          top='13%'
          fontWeight='bold'
          fontSize='2xl'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          bgClip='text'
        >
          {t('MySkills.1')}
        </Text>
        <Box w='70%' pb='2rem'>
          <CurrentlySkills />
        </Box>
        <Box w='80%'>
          <OtherSkills />
        </Box>
        <GoNextSection section='contact' />
      </Container>
    </>
  );
};

export default Skills;
