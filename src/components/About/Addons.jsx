import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import {
  UilLocationPoint,
  UilEnglishToChinese
} from '@iconscout/react-unicons';
import { useTranslation } from 'react-i18next';
import Social from '../Social';

const Addons = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        as="h3"
        fontWeight="semibold"
        fontSize="lg"
        textAlign="center"
        justifyContent="center"
        display="flex"
      >
        <span
          style={{
            marginRight: '0.5rem',
            marginTop: '0.2rem'
          }}
        >
          <UilLocationPoint />
        </span>
        Piriápolis, Uruguay
      </Box>
      <Box
        as="h3"
        fontWeight="semibold"
        fontSize="lg"
        textAlign="center"
        display="flex"
        justifyContent="center"
        mt="2"
      >
        <span style={{ marginRight: '0.5rem', marginTop: '0.2rem' }}>
          <UilEnglishToChinese />
        </span>
        {t('Languages.1')}
      </Box>
      <Text
        as="h3"
        position="relative"
        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
        bgClip="text"
        fontWeight="bold"
        fontSize="lg"
        textAlign="center"
        mt="3"
      >
        {t('ContactMeHere.1')}
      </Text>
      <Box display="flex" justifyContent="center" px="9.5rem" ml="2" mt="2">
        <Social />
      </Box>
    </>
  );
};

export default Addons;
