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
          alt='me, Nahuel Marquez'
          borderRadius='5%'
          objectFit='fill'
          mt='-2'
          width='200px'
          height='280px'
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.01)',
          }}
        />
      </Flex>
    </>
  );
};

export default HomeImage;
