import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ProjectImage = (props) => {
  return (
    <>
      <Box display='flex' w='500px' h='250px'>
        <Image
          mt='2'
          src={props.appImage}
          alt={props.appTitle}
          w='500px'
          h='250px'
          borderRadius='9px'
          objectFit='cover'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.02)',
          }}
        />
      </Box>
    </>
  );
};

export default ProjectImage;
