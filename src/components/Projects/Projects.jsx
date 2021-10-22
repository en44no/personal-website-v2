import { Box } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import List from './List';
import MoreProjectsButton from './MoreProjectsButton';
import SectionTemplate from '../Section/SectionTemplate';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTemplate
        id='projects'
        title={t('MyProjects.1')}
        subtitle={t('MyLastProjects.1')}
        sectionNextButton='skills'
      >
        <Box>
          <List />
        </Box>
        <Box
          position={{ base: 'relative', md: 'relative', lg: 'relative' }}
          top={{ base: '0', md: '7rem', lg: '1rem', xl: '5rem' }}
        >
          <MoreProjectsButton />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Projects;
