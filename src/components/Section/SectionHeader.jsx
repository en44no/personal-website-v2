import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionHeader = (props) => {
  const { title } = props;
  return (
    <>
      <Text
        position="relative"
        fontWeight="bold"
        fontSize="2xl"
        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
        bgClip="text"
      >
        {title}
      </Text>
    </>
  );
};

export default SectionHeader;
