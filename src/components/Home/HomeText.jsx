import React from 'react';
import { Text, Box, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const HomeText = () => {
  const goTo = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };
  const { t } = useTranslation();
  return (
    <>
      <Box>
        <Text fontSize='5xl' fontWeight='semibold'>
          {t('HelloText.1')}
          <Text
            fontWeight='bold'
            bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
            bgClip='text'
            mt='-2'
            fontSize='6xl'
          >
            Nahuel Márquez
          </Text>
        </Text>
        <Text fontSize='3xl' fontWeight='semibold'>
          {t('FrontEndDev.1')}
        </Text>
        <Button
          bg='#11BAE5'
          mt='3'
          aria-label='goToContactMeSection'
          onClick={() => goTo('contact')}
        >
          {t('ContactMe.1')}
        </Button>
      </Box>
    </>
  );
};

export default HomeText;
