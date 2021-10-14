import React from 'react';
import { Link, Box, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Links = () => {
  const { t } = useTranslation();
  return (
    <>
      <Flex>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>{t('About.1')}</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>{t('Contact.1')}</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>{t('Skills.1')}</Link>
        </Box>
        <Box
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.06)',
          }}
        >
          <Link>{t('Projects.1')}</Link>
        </Box>
      </Flex>
    </>
  );
};

export default Links;
