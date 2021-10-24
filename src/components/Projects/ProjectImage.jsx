import React from 'react';
import { Image, Box } from '@chakra-ui/react';

const ProjectImage = (props) => {
  return (
    <>
      <Box
        display='flex'
        w={{ base: '237,5px', md: '475px', lg: '475px' }}
        h={{ base: '112,5px', md: '225px', lg: '225px' }}
        bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
        p='0.15rem'
        borderRadius='9px'
        mt='2'
        overflow='hidden'
        boxSizing='content-box'
        _hover={{
          transition: 'transform 1s, all 0.2s ease-in-out',
          transform: 'scale(1.02)',
        }}
        mb='-2'
      >
        <a href={props.demoLink} target='_blank' rel='noreferrer' title='Demo'>
          <Image
            loading='lazy'
            src={props.appImage}
            alt={props.appTitle}
            w='475px'
            h='225px'
            borderRadius='9px'
            objectFit='cover'
          />
        </a>
      </Box>
    </>
  );
};

export default ProjectImage;
