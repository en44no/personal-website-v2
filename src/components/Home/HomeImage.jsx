import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.jpeg';

const HomeImage = () => {
  return (
    <>
      <Flex ml='5rem'>
        <Image
          src={me}
          alt='me, Nahuel Marquez'
          borderRadius='9px'
          objectFit='fill'
          mt='-2'
          width='200px'
          height='280px'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.02)',
          }}
        />
      </Flex>
    </>
  );
};

export default HomeImage;
