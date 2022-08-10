import React, { useEffect, useState } from 'react';
import {
  Box, Flex, Button, Text, HStack, useToast
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SectionTemplate from '../Section/SectionTemplate';
import Layout from './Layout';
import ListProjects from './listProjects.json';
import Carousel from 'react-elastic-carousel';

const Projects = () => {
  const { t } = useTranslation();
  const notification = useToast();
  const [totalFollowers, setTotalFollowers] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);

  const getGithubUserInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/en44no`);
      const data = await response.json();
      if (response.status === 403) {
        notification({
          id: 'github-error',
          title: t('GitHubAPIQueryLimitExceeded.1'),
          description: t('PleaseTryAgainLater.1'),
          status: "error",
          duration: 4000,
          position: "bottom",
          isClosable: true
        });
      } else {
        setTotalFollowers(data.followers);
        setTotalRepos(data.public_repos);
      }
    } catch {
      notification({
        id: 'github-error',
        title: t('ThereWasAProblemConnectingWithTheGithubAPI.1'),
        description: t('PleaseTryAgainLater.1'),
        status: "error",
        duration: 4000,
        position: "bottom",
        isClosable: true
      });
    }
  };

  useEffect(() => {
    getGithubUserInfo();
  }, []);

  let carousel;

  return (
    <>
      <SectionTemplate
        id="projects"
        title={t("MyProjects.1")}
        sectionNextButton="skills"
        marginBottomInTitle="3rem"
      >
        <Box>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            position="relative"
            mt={{ sm: "4rem", lg: "-0.5rem" }}
          >
            <Carousel enableMouseSwipe={false} breakPoints={[{ width: 0, itemsToShow: 1, itemsToScroll: 1, showArrows: false }, { width: 768, itemsToShow: 2, itemsToScroll: 2, itemPadding: [0, 0, 0, 0] }]} pagination={false} >
              {ListProjects.map((project) => (
                <Box
                  key={project.appTitle}
                  as="article"
                  pl={{ sm: "2", md: "2", lg: "6" }}
                  pt={{ sm: "0", md: "0", lg: "6" }}
                  pr={{ sm: "2", md: "2", lg: "6" }}
                  pb={{ sm: "1rem", md: "1rem", lg: "6" }}
                >
                  <Layout
                    appType={project.appType}
                    appTitle={project.appTitle}
                    codeLink={project.codeLink}
                    demoLink={project.demoLink}
                    appImage={project.appImage}
                    projectNameOnGitHub={project.projectNameOnGitHub}
                    techs={project.techs}
                  />
                </Box>
              ))}
            </Carousel>
          </Flex>
        </Box>
        <Box
          position={{
            sm: "relative",
            md: "relative",
            lg: "relative"
          }}
          top={{
            sm: "1rem",
            md: "0.5rem",
            lg: "0rem",
            xl: "0.5rem",
            xxl: "1rem"
          }}
        >
          <a
            href="https://github.com/en44no?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              aria-label="seeMoreProjectsButton"
              color="#fff"
              leftIcon={<UilGithubAlt size="1.4rem" />}
              bg="#11BAE5"
              boxShadow="md"
            >
              {t("SeeMoreProjects.1")}
            </Button>
          </a>
        </Box>
        {totalFollowers !== 0 && totalRepos !== 0 && (
          <HStack spacing="1.5rem" mt="1.5rem" mb="-1rem">
            <Box display="flex" alignItems="center">
              <Box textAlign="center" ml="0.5rem">
                <HStack justifyContent="center" spacing="10px" display="flex">
                  <AiOutlineUser size="1.5rem" />
                  <Text fontWeight="500" fontSize="1.2rem">
                    {totalFollowers}
                  </Text>
                </HStack>
                <Text fontWeight="500" fontSize="0.9rem">
                  {t("Followers.1")}
                </Text>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Box textAlign="center">
                <HStack justifyContent="center" spacing="10px" display="flex">
                  <BiGitRepoForked size="1.5rem" />
                  <Text fontWeight="500" fontSize="1.2rem">
                    {totalRepos}
                  </Text>
                </HStack>
                <Text fontWeight="500" fontSize="0.9rem">
                  {t("Repos.1")}
                </Text>
              </Box>
            </Box>
          </HStack>
        )}
      </SectionTemplate>
    </>
  );
};

export default Projects;
