import React from 'react';
import { Link, Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@chakra-ui/react';

const Links = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
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
      <Flex>
        <Box
          mr='1rem'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link
            onClick={() =>
              isLargerThan1280 ? goTo('about') : goToMobile('about')
            }
          >
            {t('About.1')}
          </Link>
        </Box>
        <Box
          mr='1rem'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link
            onClick={() =>
              isLargerThan1280 ? goTo('projects') : goToMobile('projects')
            }
          >
            {t('Projects.1')}
          </Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link
            onClick={() =>
              isLargerThan1280 ? goTo('skills') : goToMobile('skills')
            }
          >
            {t('Skills.1')}
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
