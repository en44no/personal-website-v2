import React, { useEffect, useState } from 'react';
import {
  Box, Flex, Button, Text, HStack
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { BiGitRepoForked } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import SectionTemplate from '../Section/SectionTemplate';
import Layout from './Layout';
import ListProjects from './listProjects.json';

const Projects = () => {
  const { t } = useTranslation();
  const [totalFollowers, setTotalFollowers] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);

  const getGithubUserInfo = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/en44no`);
      const data = await response.json();

      setTotalFollowers(data.followers);
      setTotalRepos(data.public_repos);
    } catch {
      console.log("Ocurrió un problema al conectarse con la API de Github");
    }
  };

  useEffect(() => {
    getGithubUserInfo();
  }, []);

  return (
    <>
      <SectionTemplate
        id="projects"
        title={t("MyProjects.1")}
        subtitle={t("MyLastProjects.1")}
        sectionNextButton="skills"
      >
        <Box>
          <Flex
            justifyContent="center"
            flexWrap="wrap"
            position="relative"
            mt={{ sm: "4rem", lg: "-0.5rem" }}
          >
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
                  techs={project.techs}
                />
              </Box>
            ))}
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
        <HStack spacing="1.5rem" mt="1.5rem" mb="-1rem">
          <Box display="flex" alignItems="center">
            <Box textAlign="center" ml="0.5rem">
              <HStack justifyContent="center" spacing="10px" display="flex">
                <AiOutlineUser size="1.5rem" />
                <Text fontWeight="500" fontSize="1.2rem">
                  {totalFollowers}
                </Text>
              </HStack>
              <Text>{t("Followers.1")}</Text>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Box textAlign="center" ml="0.5rem">
              <HStack justifyContent="center" spacing="10px" display="flex">
                <BiGitRepoForked size="1.5rem" />
                <Text fontWeight="500" fontSize="1.2rem">
                  {totalRepos}
                </Text>
              </HStack>
              <Text>{t("Repos.1")}</Text>
            </Box>
          </Box>
        </HStack>
      </SectionTemplate>
    </>
  );
};

export default Projects;
