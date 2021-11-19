import React from 'react';
import {
  SiChakraui,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTailwindcss,
} from 'react-icons/si';
import TechBox from './TechBox';
import GridSkills from './GridSkills';

const CurrentlySkills = () => (
  <>
    <GridSkills sectionText="CurrentlySkills.1">
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
        techIcon={SiTailwindcss}
        techColor="#06B6D4"
        title="Tailwind"
        link="https://tailwindcss.com/"
      />
      <TechBox
        techIcon={SiGit}
        techColor="#F05033"
        title="Git"
        link="https://git-scm.com/"
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
    </GridSkills>
  </>
);

export default CurrentlySkills;
