import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import ProjectHeader from './ProjectHeader';
import ProjectImage from './ProjectImage';
import Technologies from './Technologies';
import { MdOutlineSwipe } from 'react-icons/md';

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
        <Box display="flex" alignItems='center' justifyContent='space-between'>
          <Technologies techs={techs} />
          <Box display={{ sm: 'flex', md: 'none' }} alignItems='center' gap='2' mt='1rem' fontWeight='semibold'>
            <Text>{t('Slide.1')}</Text>
            <MdOutlineSwipe size='1.7rem' />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
