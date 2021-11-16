import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const GridSkills = (props) => {
  const { sectionText, children } = props;
  const { t } = useTranslation();

  return (
    <Box mt={{
      sm: sectionText === 'CurrentlySkills.1' ? '2.5rem' : null, md: null, lg: null, xl: '-2', xxl: null,
    }}
    >
      <Text
        as="h3"
        fontWeight="semibold"
        fontSize={{ sm: 'md', md: 'lg', lg: 'lg' }}
        textAlign="center"
        mt={{
          sm: '-3rem', md: '-3rem', lg: '0', xl: '0', xxl: '0',
        }}
        mb={{
          sm: '0.5rem', md: null, lg: null, xl: '-1', xxl: null,
        }}
      >
        {t(sectionText)}
      </Text>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        mb={{
          sm: sectionText === 'OtherSkills.1' ? '6rem' : null, md: null, lg: null, xl: '-7', xxl: null,
        }}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default GridSkills;
