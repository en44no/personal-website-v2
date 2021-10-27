import React from 'react';
import { Box } from '@chakra-ui/react';
import ProjectHeader from './ProjectHeader';
import ProjectImage from './ProjectImage';
import Technologies from './Technologies';

const Layout = (props) => {
  const {
    appType, appTitle, appImage, codeLink, demoLink, techs,
  } = props;
  return (
    <>
      <Box>
        <ProjectHeader
          appType={appType}
          appTitle={appTitle}
          codeLink={codeLink}
          demoLink={demoLink}
        />
        <ProjectImage
          appImage={appImage}
          appTitle={appTitle}
          demoLink={demoLink}
        />
        <Box display="flex">
          <Technologies techs={techs} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
