import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { UilPlay, UilBracketsCurly } from '@iconscout/react-unicons';

const CodeAndDemo = (props) => {
  const { codeLink, demoLink } = props;

  return (
    <>
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
    </>
  );
};

export default CodeAndDemo;
