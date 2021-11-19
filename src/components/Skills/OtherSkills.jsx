import React from 'react';
import { DiNodejs } from 'react-icons/di'; import {
  SiCsharp, SiMongodb, SiBootstrap, SiExpress, SiReact,
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
        techIcon={SiCsharp}
        techColor="#953DAC"
        title="CSharp"
        link="https://docs.microsoft.com/en-us/dotnet/csharp/"
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
    </GridSkills>
  </>
);

export default OtherSkills;
