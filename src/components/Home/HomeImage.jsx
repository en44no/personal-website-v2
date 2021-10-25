import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => {
  return (
    <>
      <Flex ml='5rem'>
        <Image
          loading='lazy'
          src={me}
          alt='me, Nahuel Marquez'
          borderRadius='15px'
          objectFit='fill'
          mt='-2'
          width='200px'
          height='280px'
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.02)',
          }}
        />
      </Flex>
    </>
  );
};

export default HomeImage;
