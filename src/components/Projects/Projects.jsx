import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import MoreProjectsButton from './MoreProjectsButton';
import SectionTemplate from '../Section/SectionTemplate';
import Layout from './Layout';
import ListProjects from './listProjects.json';

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
          <Grid
            templateColumns={{
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
            position="relative"
            mt={{ sm: '4rem', lg: '-0.5rem' }}
          >
            {ListProjects.map((project) => (
              <GridItem
                key={project.appTitle}
                as="article"
                pl={{ sm: '2', md: '2', lg: '6' }}
                pt={{ sm: '0', md: '0', lg: '6' }}
                pr={{ sm: '2', md: '2', lg: '6' }}
                pb={{ sm: '1rem', md: '0', lg: '6' }}
              >
                <Layout
                  appType={project.appType}
                  appTitle={project.appTitle}
                  codeLink={project.codeLink}
                  demoLink={project.demoLink}
                  appImage={project.appImage}
                  techs={project.techs}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
        <Box
          position={{
            sm: 'relative',
            md: 'relative',
            lg: 'relative',
          }}
          top={{
            sm: '1rem',
            md: '3rem',
            lg: '0rem',
            xl: '0.5rem',
            xxl: '1rem',
          }}
        >
          <MoreProjectsButton />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Projects;
