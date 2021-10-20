import { Container, Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import MoreProjectsButton from './MoreProjectsButton';
import SectionNextButton from '../Section/SectionNextButton';
import SectionHeader from '../Section/SectionHeader';
import SectionSubtitle from '../Section/SectionSubtitle';

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
        <Box>
          <List />
        </Box>
        <Box
          position={{ base: 'relative', md: 'relative', lg: 'relative' }}
          top={{ base: '0', md: '7rem', lg: '7rem' }}
        >
          <MoreProjectsButton />
        </Box>
        <Box
          mr='2.5rem'
          display={{ base: 'none', md: 'relative', lg: 'relative' }}
        >
          <SectionNextButton section='skills' />
        </Box>
      </Container>
    </>
  );
};

export default Projects;
