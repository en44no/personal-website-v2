import React from 'react';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Description = () => {
  const { t } = useTranslation();

  return (
    <>
      <Text
        as="p"
        fontWeight="semibold"
        fontSize="lg"
        textAlign={{ sm: "center", md: "center", lg: "center", xl: "left", xxl: "left" }}
        mb={{ sm: "0", md: "0", lg: "2rem", xl: "0", xxl: "0" }}
        style={{ whiteSpace: "pre-line" }}
      >
        {t("AboutMeText.1")}
      </Text>
    </>
  );
};

export default Description;
