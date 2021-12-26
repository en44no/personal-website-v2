import React from 'react';
import {
  Box, Flex, useMediaQuery,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const [isLargerThan481] = useMediaQuery('(min-width: 481px)');
  const goTo = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const goToMobile = (section) => {
    const el = document.getElementById(section);
    const y = el.getBoundingClientRect().top + window.pageYOffset + 50;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const { t } = useTranslation();

  return (
    <>
      <Flex as="ul">
        <Box
          as="li"
          mr="1rem"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
            bgClip: 'text',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          fontWeight="semibold"
        >
          <Box as="a" onClick={() => (isLargerThan481 ? goTo('about') : goToMobile('about'))}>
            {t('About.1')}
          </Box>
        </Box>
        <Box
          as="li"
          mr="1rem"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
            bgClip: 'text',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          fontWeight="semibold"
        >
          <Box
            as="a"
            onClick={() => (isLargerThan481 ? goTo('projects') : goToMobile('projects'))}
          >
            {t('Projects.1')}
          </Box>
        </Box>
        <Box
          as="li"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.600)',
            bgClip: 'text',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          fontWeight="semibold"
        >
          <Box
            as="a"
            onClick={() => (isLargerThan481 ? goTo('skills') : goToMobile('skills'))}
          >
            {t('Skills.1')}
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
