import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { UilMouseAlt } from '@iconscout/react-unicons';

const GoNextSection = (props) => {
  const goToNextSection = () => {
    document
      .getElementById(props.section)
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Box position='absolute' top='90%'>
        <IconButton
          onClick={() => {
            goToNextSection();
          }}
        >
          <UilMouseAlt size='1.8rem' />
        </IconButton>
      </Box>
    </>
  );
};

export default GoNextSection;
