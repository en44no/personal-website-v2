import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionSubtitle = (props) => {
  const { subtitle } = props;
  return (
    <>
      <Text
        position="relative"
        mt={{ mobile: '0', tablet: '0', laptop: '0' }}
        fontWeight="semibold"
        fontSize="xl"
      >
        {subtitle}
      </Text>
    </>
  );
};

export default SectionSubtitle;
