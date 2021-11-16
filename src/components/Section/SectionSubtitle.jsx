import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionSubtitle = (props) => {
  const { subtitle } = props;

  return (
    <>
      <Text
        as="h3"
        position="relative"
        mt={{ sm: '0', md: '0', lg: '0' }}
        fontWeight="semibold"
        fontSize="xl"
      >
        {subtitle}
      </Text>
    </>
  );
};

export default SectionSubtitle;
