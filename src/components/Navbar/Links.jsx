import React from 'react';
import { Link, Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const goTo = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const { t } = useTranslation();
  return (
    <>
      <Flex>
        <Box
          mr='1rem'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link onClick={() => goTo('about')}>{t('About.1')}</Link>
        </Box>
        <Box
          mr='1rem'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link onClick={() => goTo('projects')}>{t('Projects.1')}</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link onClick={() => goTo('skills')}>{t('Skills.1')}</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
