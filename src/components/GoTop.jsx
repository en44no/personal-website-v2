import React, { useEffect, useState } from 'react';
import { IconButton, Container, Box } from '@chakra-ui/react';
import { UilArrowUp } from '@iconscout/react-unicons';

const GoTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <Container maxW='container.xl'>
        <Box
          display='block'
          float='right'
          mr={{ base: '3rem', md: '4.1rem', lg: '4.1rem', xl: '4.1rem' }}
        >
          {scrollHeight > 100 ? (
            <IconButton
              aria-label='goToTopButton'
              className='goTop'
              onClick={() => goToTop()}
              zIndex='100'
              bg='#11BAE5'
              top={{
                base: '85%',
                md: '90%',
                lg: '91%',
                xl: '92.5%',
              }}
              position='fixed'
              cursor='pointer'
            >
              <UilArrowUp size='1.8rem' />
            </IconButton>
          ) : null}
        </Box>
      </Container>
    </>
  );
};

export default GoTop;
