import React from 'react';
import ProjectHeader from './ProjectHeader';
import ProjectImage from './ProjectImage';
import Technologies from './Technologies';
import { Box } from '@chakra-ui/react';

const Layout = (props) => {
  return (
    <>
      <Box>
        <ProjectHeader
          appType={props.appType}
          appTitle={props.appTitle}
          codeLink={props.codeLink}
          demoLink={props.demoLink}
        />
        <ProjectImage
          appImage={props.appImage}
          appTitle={props.appTitle}
          demoLink={props.demoLink}
        />
        <Box display='flex'>
          <Technologies techs={props.techs} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
