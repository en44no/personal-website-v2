import React from 'react';
import {
  SiCsharp,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiMicrosoftsqlserver,
  SiAngular,
} from 'react-icons/si';
import TechBox from './TechBox';
import GridSkills from './GridSkills';

const CurrentlySkills = () => (
  <>
    <GridSkills sectionText="CurrentlySkills.1">
      <TechBox
        techIcon={SiAngular}
        techColor="#d6002f"
        title="Angular"
        link="https://angular.io/"
      />
      <TechBox
        techIcon={SiCsharp}
        techColor="#953DAC"
        title="CSharp"
        link="https://docs.microsoft.com/en-us/dotnet/csharp/"
      />
      <TechBox
        techIcon={SiReact}
        techColor="#61DAFB"
        title="React"
        link="https://es.reactjs.org/"
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
      <TechBox
        techIcon={SiMicrosoftsqlserver}
        techColor="#de3029"
        title="SQL Server"
        link="https://www.microsoft.com/en-us/sql-server/sql-server-downloads"
      />
    </GridSkills>
  </>
);

export default CurrentlySkills;
