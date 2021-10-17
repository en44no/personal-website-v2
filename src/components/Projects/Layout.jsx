import React from 'react';
import Header from './Header';
import ProjectImage from './ProjectImage';
import Technologies from './Technologies';
import { Box } from '@chakra-ui/react';

const Layout = (props) => {
  return (
    <>
      <Box>
        <Header
          appType={props.appType}
          appTitle={props.appTitle}
          codeLink={props.codeLink}
          demoLink={props.demoLink}
        />
        <ProjectImage appImage={props.appImage} appTitle={props.appTitle} />
        <Box display='flex'>
          <Technologies techs={props.techs} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
