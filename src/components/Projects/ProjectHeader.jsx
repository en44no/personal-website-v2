import React from 'react';
import {
  Box, Flex, Spacer, IconButton
} from '@chakra-ui/react';
import { UilPlay, UilBracketsCurly } from '@iconscout/react-unicons';

const Header = (props) => {
  const {
    appType, appTitle, codeLink, demoLink
  } = props;

  return (
    <>
      <Box>
        <>
          <Box
            fontWeight="semibold"
            as="h6"
            fontSize="sm"
            color="#11BAE5"
          >
            {appType}
          </Box>
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
