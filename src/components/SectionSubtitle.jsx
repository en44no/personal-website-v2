import React from 'react';
import { Text } from '@chakra-ui/react';

const SectionSubtitle = (props) => {
  return (
    <>
      <Text position='absolute' top='20%' fontWeight='semibold' fontSize='lg'>
        {props.subtitle}
      </Text>
    </>
  );
};

export default SectionSubtitle;
