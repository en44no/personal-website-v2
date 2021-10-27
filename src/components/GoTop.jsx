import React, { useEffect, useState } from 'react';
import { IconButton, Container, Box } from '@chakra-ui/react';
import { UilArrowUp } from '@iconscout/react-unicons';

const GoTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;

    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Container maxW="container.xl">
        <Box
          display="block"
          float="right"
          mr={{
            mobile: '3rem',
            tablet: '3rem',
            laptop: '4.1rem',
            desktop: '4.1rem',
          }}
        >
          {scrollHeight > 100 ? (
            <IconButton
              boxShadow="md"
              aria-label="goToTopButton"
              className="goTop"
              onClick={() => goToTop()}
              zIndex="100"
              bg="#11BAE5"
              top={{
                mobile: '82%',
                tablet: '79%',
                laptop: '91%',
                desktop: '90%',
                largeDesktop: '92%',
              }}
              position="fixed"
              cursor="pointer"
            >
              <UilArrowUp size="1.8rem" />
            </IconButton>
          ) : null}
        </Box>
      </Container>
    </>
  );
};

export default GoTop;
