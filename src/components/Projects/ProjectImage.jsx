import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ProjectImage = (props) => {
  return (
    <>
      <Box
        display='flex'
        w='500px'
        h='250px'
        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
        p='0.4%'
        borderRadius='9px'
        mt='2'
        overflow='hidden'
        boxSizing='content-box'
        _hover={{
          transition: 'transform .2s',
          transform: 'scale(1.02)',
        }}
        mb='-2'
      >
        <Image
          src={props.appImage}
          alt={props.appTitle}
          w='500px'
          h='250px'
          borderRadius='9px'
          objectFit='cover'
        />
      </Box>
    </>
  );
};

export default ProjectImage;
