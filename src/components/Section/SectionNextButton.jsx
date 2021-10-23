import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { BsHandIndex } from 'react-icons/bs';

const SectionNextButton = (props) => {
  const goToNextSection = () => {
    document
      .getElementById(props.section)
      .scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Box className='mouse-icon-animation' position='relative' display='block'>
        <IconButton
          aria-label='goToNextSectionButton'
          onClick={() => {
            goToNextSection();
          }}
        >
          {props.isFinger ? (
            <BsHandIndex size='1.8rem' style={{ transform: 'scaleY(-1)' }} />
          ) : (
            <UilMouseAlt size='1.8rem' />
          )}
        </IconButton>
      </Box>
    </>
  );
};

export default SectionNextButton;
