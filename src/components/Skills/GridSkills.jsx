import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const GridSkills = (props) => {
  const { sectionText, children } = props;
  const { t } = useTranslation();

  return (
    <Box mt={{
      mobile: sectionText === 'CurrentlySkills.1' ? '2.5rem' : null, tablet: null, laptop: null, desktop: '-2', largeDesktop: null,
    }}
    >
      <Text
        as="h3"
        fontWeight="semibold"
        fontSize={{ mobile: 'md', tablet: 'lg', laptop: 'lg' }}
        textAlign="center"
        mt={{
          mobile: '-3rem', tablet: '-3rem', laptop: '0', desktop: '0', largeDesktop: '0',
        }}
        mb={{
          mobile: '0.5rem', tablet: null, laptop: null, desktop: '-1', largeDesktop: null,
        }}
      >
        {t(sectionText)}
      </Text>
      <Flex
        justifyContent="center"
        flexWrap="wrap"
        mb={{
          mobile: sectionText === 'OtherSkills.1' ? '6rem' : null, tablet: null, laptop: null, desktop: '-7', largeDesktop: null,
        }}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default GridSkills;
