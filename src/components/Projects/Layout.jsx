import React from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProjectHeader from './ProjectHeader';
import ProjectImage from './ProjectImage';
import Technologies from './Technologies';

const Layout = (props) => {
  const { t } = useTranslation();
  const {
    appType, appTitle, appImage, codeLink, demoLink, techs, projectNameOnGitHub
  } = props;

  return (
    <>
      <Box>
        <ProjectHeader
          appType={t(appType.toString())}
          appTitle={t(appTitle.toString())}
          codeLink={t(codeLink.toString())}
          demoLink={t(demoLink.toString())}
          projectNameOnGitHub={projectNameOnGitHub}
        />
        <ProjectImage
          appImage={t(appImage.toString())}
          appTitle={t(appTitle.toString())}
          demoLink={t(demoLink.toString())}
        />
        <Box display="flex">
          <Technologies techs={techs} />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
