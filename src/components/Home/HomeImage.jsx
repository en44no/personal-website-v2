import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => {
  return (
    <>
      <Flex ml='5rem'>
        <Image
          loading='lazy'
          boxShadow='md'
          src={me}
          alt='me, Nahuel Marquez'
          borderRadius='15px'
          objectFit='fill'
          mt='-3'
          width={{ mobile: '', tablet: '180px', laptop: '200px' }}
          minWidth={{ mobile: '', tablet: '160px', laptop: '' }}
          height={{ mobile: '', tablet: '220px', laptop: '280px' }}
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
