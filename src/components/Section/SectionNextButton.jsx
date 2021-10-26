import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { BsHandIndex } from 'react-icons/bs';
import { useMediaQuery } from '@chakra-ui/react';

const SectionNextButton = (props) => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
  const goToNextSection = () => {
    document
      .getElementById(props.section)
      .scrollIntoView({ behavior: 'smooth' });
  };

  const goToNextSectionMobile = () => {
    const el = document.getElementById(props.section);
    const y = el.getBoundingClientRect().top + window.pageYOffset + 55;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <Box className='mouse-icon-animation' position='relative' display='block'>
        <IconButton
          aria-label='goToNextSectionButton'
          onClick={() => {
            isLargerThan1280 ? goToNextSection() : goToNextSectionMobile();
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
