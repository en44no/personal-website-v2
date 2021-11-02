import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Resume from '../About/Resume';

const HomeText = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box as="section">
        <Text
          as="h2"
          fontSize={{ mobile: '4xl', tablet: '3xl', laptop: '5xl' }}
          fontWeight="semibold"
        >
          {t('HelloText.1')}
          <Text
            as="h1"
            fontWeight="bold"
            lineHeight="normal"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
            mt="-2"
            fontSize={{ mobile: '6xl', tablet: '6xl', laptop: '6xl' }}
          >
            Nahuel Márquez
          </Text>
        </Text>
        <Text
          as="h3"
          fontSize={{ mobile: '2xl', tablet: 'xl', laptop: '3xl' }}
          fontWeight="semibold"
        >
          {t('FrontEndDev.1')}
        </Text>
        <Resume />
      </Box>
    </>
  );
};

export default HomeText;
