import React from 'react';
import { Box, IconButton, useMediaQuery } from '@chakra-ui/react';
import { UilMouseAlt } from '@iconscout/react-unicons';
import { BsHandIndex } from 'react-icons/bs';

const SectionNextButton = (props) => {
  const { isFinger } = props;
  const [isLargerThan481] = useMediaQuery('(min-width: 481px)');
  const goToNextSection = () => {
    document
      .getElementById(props.section)
      .scrollIntoView({ behavior: 'smooth' });
  };

  const goToNextSectionMobile = () => {
    const el = document.getElementById(props.section);
    const y = el.getBoundingClientRect().top + window.pageYOffset + 50;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <>
      <Box className="mouse-icon-animation" position="relative" display="block">
        <IconButton
          aria-label="goToNextSectionButton"
          onClick={() => (isLargerThan481 ? goToNextSection() : goToNextSectionMobile())}
        >
          {isFinger ? (
            <BsHandIndex size="1.8rem" style={{ transform: 'scaleY(-1)' }} />
          ) : (
            <UilMouseAlt size="1.8rem" />
          )}
        </IconButton>
      </Box>
    </>
  );
};

export default SectionNextButton;
