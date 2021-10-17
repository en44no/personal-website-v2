import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { UilPlay, UilBracketsCurly } from '@iconscout/react-unicons';

const CodeAndDemo = (props) => {
  return (
    <>
      <Box display='flex'>
        <>
          <a
            href={props.codeLink}
            target='_blank'
            rel='noreferrer'
            title='Code'
          >
            <IconButton h='2rem' px='2'>
              <UilBracketsCurly fontSize='1.3rem' />
            </IconButton>
          </a>
          <a
            href={props.demoLink}
            target='_blank'
            rel='noreferrer'
            title='Demo'
          >
            <IconButton h='2rem' px='2'>
              <UilPlay />
            </IconButton>
          </a>
        </>
      </Box>
    </>
  );
};

export default CodeAndDemo;