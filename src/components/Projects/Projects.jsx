import { Container, Text, Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import MoreProjectsButton from './MoreProjectsButton';
import GoNextSection from '../GoNextSection';
import SectionHeader from '../SectionHeader';
import SectionSubtitle from '../SectionSubtitle';

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
        <SectionSubtitle subtitle={t('MyLastProjects.1')} />
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
