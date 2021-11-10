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
        id="projects"
        title={t('MyProjects.1')}
        subtitle={t('MyLastProjects.1')}
        sectionNextButton="skills"
      >
        <Box>
          <List />
        </Box>
        <Box
          position={{
            mobile: 'relative',
            tablet: 'relative',
            laptop: 'relative',
          }}
          top={{
            mobile: '-0.2rem',
            tablet: '3rem',
            laptop: '0rem',
            desktop: '1.5rem',
            largeDesktop: '4rem',
          }}
        >
          <MoreProjectsButton />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Projects;
