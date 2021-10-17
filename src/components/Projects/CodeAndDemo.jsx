import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaCode, FaPlay } from 'react-icons/fa';

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
              <FaCode fontSize='1.3rem' />
            </IconButton>
          </a>
          <a
            href={props.demoLink}
            target='_blank'
            rel='noreferrer'
            title='Demo'
          >
            <IconButton h='2rem' px='2'>
              <FaPlay fontSize='1rem' />
            </IconButton>
          </a>
        </>
      </Box>
    </>
  );
};

export default CodeAndDemo;
