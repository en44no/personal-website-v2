import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => (
  <>
    <Flex
      ml={{
        sm: null, md: '0rem', lg: '4rem', xl: '5rem', xxl: '5rem'
      }}
      mr={{
        sm: null, md: null, lg: '-7rem', xl: null, xxl: null
      }}
    >
      <figure>
        <Image
          as="img"
          src={me}
          alt="me, Nahuel Marquez"
          borderRadius="9px"
          objectFit="contain"
          mt={{
            sm: null, md: '2rem', lg: '-3', xl: '-5', xxl: '-5'
          }}
          width={{
            sm: null, md: '160px', lg: '200px', xl: '250px', xxl: '250px'
          }}
          minWidth={{
            sm: null, md: '160px', lg: '160px', xl: '160px', xxl: '160px'
          }}
          height={{
            sm: null, md: '220px', lg: '280px', xl: '280px', xxl: '280px'
          }}
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.02)'
          }}
        />
      </figure>
    </Flex>
  </>
);

export default HomeImage;
