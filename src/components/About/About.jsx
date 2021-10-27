import React from 'react';
import { useTranslation } from 'react-i18next';
import Content from './Content';
import SectionTemplate from '../Section/SectionTemplate';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTemplate
        id="about"
        title={t('AboutMe.1')}
        subtitle={t('FrontEndDevJr.1')}
        sectionNextButton="projects"
      >
        <Content />
      </SectionTemplate>
    </>
  );
};

export default About;
