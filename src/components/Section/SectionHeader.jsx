import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionHeader = (props) => {
  const { title } = props;

  return (
    <>
      <Text
        as="h2"
        position="relative"
        fontWeight="bold"
        fontSize={{
          sm: '2xl', md: '3xl', lg: '4xl', xl: '4xl', xxl: '4xl'
        }}
        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
        bgClip="text"
      >
        {title}
      </Text>
    </>
  );
};

export default SectionHeader;
