import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.jpeg';

const HomeImage = () => {
  return (
    <>
      <Flex ml='5rem'>
        <Image
          src={me}
          boxShadow='lg'
          borderRadius='full'
          objectFit='fill'
          mt='-2'
          w='210px'
          h='280px'
        />
      </Flex>
    </>
  );
};

export default HomeImage;
