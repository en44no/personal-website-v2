import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import {
  UilLocationPoint,
  UilEnglishToChinese,
} from '@iconscout/react-unicons';
import Social from '../Social';
import Resume from './Resume';
import { useTranslation } from 'react-i18next';

const Addons = () => {
  const { t } = useTranslation();
  return (
    <>
      <Text
        fontWeight='semibold'
        fontSize='xl'
        textAlign='center'
        justifyContent='center'
        display='flex'
      >
        <span
          style={{
            marginRight: '0.5rem',
            marginTop: '0.2rem',
          }}
        >
          <UilLocationPoint />
        </span>
        Piriápolis, Uruguay
      </Text>
      <Text
        fontWeight='semibold'
        fontSize='xl'
        textAlign='center'
        display='flex'
        justifyContent='center'
        mt='2'
      >
        <span style={{ marginRight: '0.5rem', marginTop: '0.2rem' }}>
          <UilEnglishToChinese />
        </span>
        {t('Languages.1')}
      </Text>
      <Box display='flex' justifyContent='center' px='9.5rem' ml='2' mt='2'>
        <Social />
      </Box>
      <Box ml='2' px={{ base: '3rem', md: '7rem', lg: '7rem' }}>
        <Resume />
      </Box>
    </>
  );
};

export default Addons;
