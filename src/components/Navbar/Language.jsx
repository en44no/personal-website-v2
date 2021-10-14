import { Button, IconButton } from '@chakra-ui/button';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

const Language = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    const change = language === 'en' ? 'es' : 'en';
    setLanguage(change);
  };

  return (
    <>
      <Button
        aria-label='toggleColorModeButton'
        mr='-3'
        w={'5%'}
        onClick={() =>
          language === 'en' ? handleClick('en') : handleClick('es')
        }
      >
        <IconButton
          bg='transparent'
          isRound
          _hover={{
            bgGradient: 'linear(to-r, cyan.400, blue.500, purple.500)',
          }}
          _focus={{ boxShadow: 'base' }}
        >
          <FaLanguage fontSize='1.5rem' />
        </IconButton>
      </Button>
    </>
  );
};

export default Language;
