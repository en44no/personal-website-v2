import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import SectionHeader from './SectionHeader';
import SectionSubtitle from './SectionSubtitle';
import SectionNextButton from './SectionNextButton';

const SectionTemplate = (props) => {
  const {
    id, title, subtitle, sectionNextButton, children, sectionHome
  } = props;

  return (
    <>
      <Container
        as="section"
        id={id}
        w="100%"
        maxW="container.xl"
        height={{
          sm: sectionHome ? '80vh' : 'auto', md: '100vh', lg: '100vh', xl: '100vh'
        }}
        position="relative"
        display="flex"
        flexDirection="column"
      >
        {title
          ? (
            <Box
              as="section"
              textAlign="center"
              h="2rem"
              position="relative"
              top="6rem"
              w="100%"
              mb="1rem"
            >
              <SectionHeader title={title} />
            </Box>
          )
          : null}
        {subtitle
          ? (
            <Box as="section" textAlign="center" h="2rem" position="relative" top="6rem" w="100%">
              <SectionSubtitle subtitle={subtitle} />
            </Box>
          )
          : null}
        {children
          ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              height="100%"
              width="100%"
              mt="3rem"
              mb="2rem"
            >
              {children}
            </Box>
          )
          : null}
        {sectionNextButton
          ? (
            <Box
              as="section"
              textAlign="center"
              position="relative"
              w="100%"
              bottom={{
                sm: '5rem', md: null, lg: '2rem', xl: '2rem'
              }}
              display={{
                sm: 'none', md: 'none', lg: 'block', xl: 'block'
              }}
            >
              <SectionNextButton section={sectionNextButton} />
            </Box>
          )
          : null}
      </Container>
    </>
  );
};

export default SectionTemplate;
