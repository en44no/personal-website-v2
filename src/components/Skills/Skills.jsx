import React from 'react';
import { Box } from '@chakra-ui/react';
import CurrentlySkills from './CurrentlySkills';
import OtherSkills from './OtherSkills';
import { useTranslation } from 'react-i18next';

import SectionTemplate from '../Section/SectionTemplate';

const Skills = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTemplate id='skills' title={t('MySkills.1')}>
        <Box
          w={{ sm: '100%', md: '70%', lg: '87%' }}
          pb={{ sm: '0rem', md: '2rem', lg: '2rem' }}
          position='relative'
          top={{ sm: '6rem', md: '0', lg: '0' }}
        >
          <CurrentlySkills />
        </Box>
        <Box
          w={{ sm: '100%', md: '80%', lg: '70%' }}
          position='relative'
          top={{ sm: '10rem', md: '0', lg: '0' }}
        >
          <OtherSkills />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Skills;
