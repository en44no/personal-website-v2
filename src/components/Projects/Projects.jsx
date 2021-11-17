import React from 'react';
import {
  Box, Flex, Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UilGithubAlt } from '@iconscout/react-unicons';
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
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            position="relative"
            mt={{ sm: '4rem', lg: '-0.5rem' }}
          >
            {ListProjects.map((project) => (
              <Box
                key={project.appTitle}
                as="article"
                pl={{ sm: '2', md: '2', lg: '6' }}
                pt={{ sm: '0', md: '0', lg: '6' }}
                pr={{ sm: '2', md: '2', lg: '6' }}
                pb={{ sm: '1rem', md: '1rem', lg: '6' }}
              >
                <Layout
                  appType={project.appType}
                  appTitle={project.appTitle}
                  codeLink={project.codeLink}
                  demoLink={project.demoLink}
                  appImage={project.appImage}
                  techs={project.techs}
                />
              </Box>
            ))}
          </Flex>
        </Box>
        <Box
          position={{
            sm: 'relative', md: 'relative', lg: 'relative',
          }}
          top={{
            sm: '1rem', md: '0.5rem', lg: '0rem', xl: '0.5rem', xxl: '1rem',
          }}
        >
          <a
            href="https://github.com/en44no?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              aria-label="seeMoreProjectsButton"
              leftIcon={<UilGithubAlt size="1.4rem" />}
              bg="#11BAE5"
              boxShadow="md"
            >
              {t('SeeMoreProjects.1')}
            </Button>
          </a>
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Projects;
