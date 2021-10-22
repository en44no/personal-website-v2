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
      <SectionTemplate
        id='skills'
        title={t('MySkills.1')}
        sectionNextButton='contact'
      >
        <Box
          w={{ base: '93%', md: '70%', lg: '70%' }}
          pb={{ base: '0rem', md: '2rem', lg: '2rem' }}
          position='relative'
          top={{ base: '7rem', md: '0', lg: '0' }}
        >
          <CurrentlySkills />
        </Box>
        <Box
          w={{ base: '93%', md: '80%', lg: '80%' }}
          position='relative'
          top={{ base: '10rem', md: '0', lg: '0' }}
        >
          <OtherSkills />
        </Box>
      </SectionTemplate>
    </>
  );
};

export default Skills;
