import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => (
  <>
    <Flex
      ml={{
        mobile: null,
        tablet: '0rem',
        laptop: '5rem',
        desktop: '5rem',
        largeDesktop: '5rem',
      }}
    >
      <Image
        loading="lazy"
        src={me}
        alt="me, Nahuel Marquez"
        borderRadius="9px"
        objectFit="fill"
        mt={{
          mobile: '',
          tablet: '2rem',
          laptop: '-3',
          desktop: '-5',
          largeDesktop: '-5',
        }}
        width={{
          mobile: '',
          tablet: '160px',
          laptop: '200px',
          desktop: '',
          largeDesktop: '',
        }}
        minWidth={{
          mobile: '',
          tablet: '160px',
          laptop: '',
          desktop: '',
          largeDesktop: '',
        }}
        height={{
          mobile: '',
          tablet: '220px',
          laptop: '280px',
          desktop: '',
          largeDesktop: '',
        }}
        _hover={{
          transition: 'transform 1s, all 0.2s ease-in-out',
          transform: 'scale(1.02)',
        }}
      />
    </Flex>
  </>
);

export default HomeImage;
