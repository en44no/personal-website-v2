import { Container, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import MoreProjectsButton from './MoreProjectsButton';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        id='projects'
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
          {t('MyProjects.1')}
        </Text>
        <Text position='absolute' top='18%' fontWeight='semibold' fontSize='lg'>
          {t('MyLastProjects.1')}
        </Text>
        <Box>
          <List />
        </Box>
        <Box position='absolute' top='80%'>
          <MoreProjectsButton />
        </Box>
      </Container>
    </>
  );
};

export default Projects;
