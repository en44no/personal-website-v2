import { IconButton } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { UilEnglishToChinese } from '@iconscout/react-unicons';
import { useColorMode } from '@chakra-ui/color-mode';

const Language = () => {
  const { colorMode } = useColorMode();
  const { i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <IconButton
        onClick={() =>
          i18n.language === "en" ? handleClick("es") : handleClick("en")
        }
        aria-label="toggleLanguageButton_"
        bg="transparent"
        _hover={{
          bgGradient: "linear(to-r, cyan.400, blue.500, purple.500)"
        }}
      >
        {colorMode === "dark"
          ? (
            <UilEnglishToChinese size="1.5rem" color="white" />
          )
          : (
            <UilEnglishToChinese size="1.5rem" color="dark" />
          )}
      </IconButton>
    </>
  );
};

export default Language;
