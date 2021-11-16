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
          pb={{ sm: '0rem', md: '0rem', lg: '2rem' }}
          position="relative"
          top={{ sm: '6rem', md: '11rem', lg: '0rem' }}
        >
          <CurrentlySkills />
        </Box>
        <Box
          position="relative"
          top={{ sm: '10rem', md: '16rem', lg: '0' }}
        >
          <OtherSkills />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Skills;
