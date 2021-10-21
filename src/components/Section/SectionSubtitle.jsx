import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionSubtitle = (props) => {
  return (
    <>
      <Text
        position='relative'
        mt={{ base: '3', md: '0', lg: '0' }}
        fontWeight='semibold'
        fontSize='lg'
      >
        {props.subtitle}
      </Text>
    </>
  );
};

export default SectionSubtitle;
