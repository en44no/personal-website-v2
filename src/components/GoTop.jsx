import React from 'react';
import { IconButton, Container, Box } from '@chakra-ui/react';
import { UilArrowUp } from '@iconscout/react-unicons';

const GoTop = ({ isScrolling }) => {
  const goToTop = () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Container maxW='container.xl' position='relative'>
        {isScrolling > 120 ? (
          <Box onClick={() => goToTop()}>
            <IconButton bg='#11BAE5'>
              <UilArrowUp size='1.8rem' />
            </IconButton>
          </Box>
        ) : null}
      </Container>
    </>
  );
};

export default GoTop;
