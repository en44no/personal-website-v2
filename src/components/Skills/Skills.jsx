import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import CurrentlySkills from './CurrentlySkills';
import OtherSkills from './OtherSkills';

import SectionTemplate from '../Section/SectionTemplate';

const Skills = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTemplate id="skills" title={t('MySkills.1')}>
        <Box
          w={{ mobile: '100%', tablet: '90%', laptop: '100%' }}
          pb={{ mobile: '0rem', tablet: '0rem', laptop: '2rem' }}
          position="relative"
          top={{ mobile: '6rem', tablet: '11rem', laptop: '0' }}
        >
          <CurrentlySkills />
        </Box>
        <Box
          w={{
            mobile: '100%', tablet: '90%', laptop: '100%', desktop: '80%', largeDesktop: '80%',
          }}
          position="relative"
          top={{ mobile: '10rem', tablet: '16rem', laptop: '0' }}
        >
          <OtherSkills />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Skills;
