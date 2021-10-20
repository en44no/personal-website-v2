import React from 'react';
import { Container } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import GoNextSection from '../GoNextSection';
import SectionHeader from '../SectionHeader';
import Content from './Content';
import SectionSubtitle from '../SectionSubtitle';

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
        <GoNextSection section='projects' />
      </Container>
    </>
  );
};

export default About;
