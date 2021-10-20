import { Container, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import MoreProjectsButton from './MoreProjectsButton';
import GoNextSection from '../GoNextSection';
import SectionHeader from '../SectionHeader';

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
        <SectionHeader title={t('MyProjects.1')} />
        <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
          {t('MyLastProjects.1')}
        </Text>
        <Box mt='-6'>
          <List />
        </Box>
        <Box position='absolute' top='78%'>
          <MoreProjectsButton />
        </Box>
        <GoNextSection section='skills' />
      </Container>
    </>
  );
};

export default Projects;
