import React, { useState, useEffect } from 'react';
import {
  Box, Flex, Spacer, IconButton, Text, HStack
} from '@chakra-ui/react';
import {
  UilPlay,
  UilBracketsCurly,
  UilHistory
} from "@iconscout/react-unicons";
import { useTranslation } from 'react-i18next';

const Header = (props) => {
  const {
    appType, appTitle, codeLink, demoLink, projectNameOnGitHub
  } = props;

  const { t } = useTranslation();

  const [totalCommits, setTotalCommits] = useState(0);

  const owner = "en44no";
  const repo = projectNameOnGitHub;
  const sha = "master";

  useEffect(() => {
    getAllCommitsCount(owner, repo, sha);
  }, [])

  const baseUrl = "https://api.github.com";

  function httpGet(theUrl, returnHeaders) {
    const xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    if (returnHeaders) {
      return xmlHttp;
    }

    return xmlHttp.responseText;
  }

  const getAllCommitsCount = (owner, repo, sha) => {
    const firstCommit = getFirstCommit(owner, repo);
    const compareUrl =
      baseUrl +
      "/repos/" +
      owner +
      "/" +
      repo +
      "/compare/" +
      firstCommit +
      "..." +
      sha;
    const commitReq = httpGet(compareUrl);
    const commitCount = JSON.parse(commitReq).total_commits + 1;

    setTotalCommits(commitCount);
  }

  const getFirstCommit = (owner, repo) => {
    const url = baseUrl + "/repos/" + owner + "/" + repo + "/commits";
    const req = httpGet(url, true);

    if (req.status === 403) {
      console.log("Superado el limite de consultas a la API de GitHub");
    } else {
      let firstCommitHash = "";

      if (req.getResponseHeader("Link")) {
        const pageUrl = req
          .getResponseHeader("Link")
          .split(",")[1]
          .split(";")[0]
          .split("<")[1]
          .split(">")[0];
        const reqLastCommit = httpGet(pageUrl);
        const firstCommit = JSON.parse(reqLastCommit);

        firstCommitHash = firstCommit[firstCommit.length - 1].sha;
      } else {
        const firstCommit = JSON.parse(req.responseText);

        firstCommitHash = firstCommit[firstCommit.length - 1].sha;
      }

      return firstCommitHash;
    }
  }

  return (
    <>
      <Box>
        <>
          <HStack justifyContent="space-between" mr="0.6rem">
            <Text fontWeight="semibold" as="h6" fontSize="sm" color="#11BAE5">
              {appType}
            </Text>
            {totalCommits !== 0 && (
              <HStack>
                <Box mr='-0.2rem'>
                  <UilHistory size='1.2rem' />
                </Box>
                <Text fontWeight='500' fontSize='0.9rem'>{totalCommits}    {t("ChangesMade.1")}</Text>
              </HStack>
            )}
          </HStack>
          <Flex>
            <Box mt="1" fontWeight="semibold" as="h5" fontSize="lg">
              {appTitle}
            </Box>
            <Spacer />
            <Box display="flex">
              <>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Code"
                >
                  <IconButton h="2rem" px="2" aria-label="SeeDemoButton">
                    <UilBracketsCurly fontSize="1.3rem" />
                  </IconButton>
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noreferrer"
                  title="Demo"
                >
                  <IconButton h="2rem" px="2" aria-label="SeeAppButton">
                    <UilPlay />
                  </IconButton>
                </a>
              </>
            </Box>
          </Flex>
        </>
      </Box>
    </>
  );
};

export default Header;
