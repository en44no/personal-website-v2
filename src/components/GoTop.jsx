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
            sm: '3rem', md: '3rem', lg: '4.1rem', xl: '3.5rem', xxl: '3.5rem'
          }}
        >
          {scrollHeight > 100
            ? (
              <IconButton
                boxShadow="md"
                aria-label="goToTopButton"
                className="goTop"
                color="#fff"
                onClick={() => goToTop()}
                zIndex="100"
                bg="#11BAE5"
                top={{
                  sm: '82%', md: '79%', lg: '91%', xl: '90%', xxl: '92%'
                }}
                position="fixed"
                cursor="pointer"
              >
                <UilArrowUp size="1.8rem" />
              </IconButton>
            )
            : null}
        </Box>
      </Container>
    </>
  );
};

export default GoTop;
