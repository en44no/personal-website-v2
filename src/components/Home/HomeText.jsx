import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Resume from '../About/Resume';

const HomeText = () => {
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Text
          fontSize={{ base: '4xl', md: '5xl', lg: '5xl' }}
          fontWeight='semibold'
        >
          {t('HelloText.1')}
          <Text
            as='h1'
            fontWeight='bold'
            lineHeight='normal'
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            bgClip='text'
            mt='-2'
            fontSize='6xl'
          >
            Nahuel Márquez
          </Text>
        </Text>
        <Text
          fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
          fontWeight='semibold'
        >
          {t('FrontEndDev.1')}
        </Text>
        <Resume />
      </Box>
    </>
  );
};

export default HomeText;
