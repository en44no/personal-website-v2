import React from 'react';
import { DiNodejs } from 'react-icons/di'; import {
  SiMongodb, SiBootstrap, SiExpress, SiReact,
  SiTailwindcss,
  SiChakraui
} from 'react-icons/si';
import TechBox from './TechBox';
import GridSkills from './GridSkills';

const OtherSkills = () => (
  <>
    <GridSkills sectionText="OtherSkills.1">
      <TechBox
        techIcon={SiReact}
        techColor="#61DAFB"
        title="React Native"
        link="https://reactnative.dev/"
      />
      <TechBox
        techIcon={DiNodejs}
        techColor="#6DA55F"
        title="Node"
        link="https://nodejs.org/es/"
      />
      <TechBox
        techIcon={SiMongodb}
        techColor="#71B35E"
        title="MongoDB"
        link="https://www.mongodb.com/"
      />
      <TechBox
        techIcon={SiBootstrap}
        techColor="#8B13FD"
        title="Bootstrap"
        link="https://getbootstrap.com/"
      />
      <TechBox
        techIcon={SiExpress}
        techColor="grey"
        title="Express"
        link="https://expressjs.com/es/"
      />
      <TechBox
        techIcon={SiTailwindcss}
        techColor="#06B6D4"
        title="Tailwind"
        link="https://tailwindcss.com/"
      />
      <TechBox
        techIcon={SiChakraui}
        techColor="#3FC7BF"
        title="Chakra UI"
        link="https://chakra-ui.com/"
      />
    </GridSkills>
  </>
);

export default OtherSkills;
