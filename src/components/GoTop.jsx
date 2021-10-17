import React from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { IconButton, Container, Box } from '@chakra-ui/react';

const GoTop = ({ isScrolling }) => {
  const goToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Container maxW='container.xl' position='relative'>
        {isScrolling > 120 ? (
          <Box onClick={() => goToTop()}>
            <Box bg='#11BAE5' borderRadius='9%'>
              <IconButton>
                <FaAngleDoubleUp fontSize='1.5rem' />
              </IconButton>
            </Box>
          </Box>
        ) : null}
      </Container>
    </>
  );
};

export default GoTop;
