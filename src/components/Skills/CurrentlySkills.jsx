import React from 'react';
import { Text, Grid } from '@chakra-ui/react';
import {
  SiChakraui,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import TechBox from './TechBox';

const CurrentlySkills = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text fontWeight="semibold" fontSize="lg" textAlign="center" pb="1.5rem">
        {t('CurrentlySkills.1')}
      </Text>
      <Grid
        templateColumns={{
          mobile: 'repeat(3, 1fr)',
          tablet: 'repeat(4, 1fr)',
          laptop: 'repeat(6, 1fr)',
        }}
        position="relative"
        placeItems="center"
      >
        <TechBox
          techIcon={SiChakraui}
          techColor="#3FC7BF"
          title="Chakra UI"
          link="https://chakra-ui.com/"
        />
        <TechBox
          techIcon={SiReact}
          techColor="#61DAFB"
          title="React"
          link="https://es.reactjs.org/"
        />
        <TechBox
          techIcon={SiJavascript}
          techColor="#F7E018"
          title="JavaScript"
          link="https://developer.mozilla.org/es/docs/Web/JavaScript"
        />

        <TechBox
          techIcon={SiHtml5}
          techColor="#E54C21"
          title="HTML 5"
          link="https://developer.mozilla.org/es/docs/Glossary/HTML5"
        />
        <TechBox
          techIcon={SiCss3}
          techColor="#2965F1"
          title="CSS"
          link="https://developer.mozilla.org/es/docs/Web/CSS"
        />
        <TechBox
          techIcon={SiGit}
          techColor="#F05033"
          title="Git"
          link="https://git-scm.com/"
        />
      </Grid>
    </>
  );
};

export default CurrentlySkills;
