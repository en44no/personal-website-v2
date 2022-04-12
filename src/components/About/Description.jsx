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
        textAlign="left"
        style={{ whiteSpace: 'pre-line' }}
      >
        {t('AboutMeText.1')}
      </Text>
    </>
  );
};

export default Description;
