import React from 'react';
import { Container, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import SectionNextButton from '../Section/SectionNextButton';
import SectionHeader from '../Section/SectionHeader';
import Content from './Content';
import SectionSubtitle from '../Section/SectionSubtitle';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container
        id='about'
        maxW='container.xl'
        display='flex'
        position='relative'
        alignItems='center'
        justifyContent='center'
        height='100vh'
        width='100%'
        flexDirection='column'
      >
        <SectionHeader title={t('AboutMe.1')} />
        <SectionSubtitle subtitle={t('FrontEndDevJr.1')} />
        <Content />
        <Box
          mr='2.5rem'
          display={{ base: 'none', md: 'relative', lg: 'relative' }}
        >
          <SectionNextButton section='projects' />
        </Box>
      </Container>
    </>
  );
};

export default About;
