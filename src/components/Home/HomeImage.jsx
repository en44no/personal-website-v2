import React from 'react';
import { Flex, Image, Box } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => {
  return (
    <>
      <Flex ml='5rem'>
        <Box
          display='flex'
          bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
          p='0.15rem'
          borderRadius='15px'
          mt='-3'
          overflow='hidden'
          boxSizing='content-box'
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.02)',
          }}
        >
          <Image
            loading='lazy'
            src={me}
            alt='me, Nahuel Marquez'
            borderRadius='15px'
            objectFit='fill'
            width='200px'
            height='280px'
          />
        </Box>
      </Flex>
    </>
  );
};

export default HomeImage;
