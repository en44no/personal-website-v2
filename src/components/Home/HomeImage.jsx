import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import me from '../../assets/Nahuel_Marquez.webp';

const HomeImage = () => (
  <>
    <Flex
      ml={{
        sm: null,
        md: '0rem',
        lg: '4rem',
        xl: '5rem',
        xxl: '5rem',
      }}
      mr={{
        sm: null,
        md: null,
        lg: '-7rem',
        xl: null,
        xxl: null,
      }}
    >
      <Image
        loading="lazy"
        src={me}
        alt="me, Nahuel Marquez"
        borderRadius="9px"
        objectFit="fill"
        mt={{
          sm: '',
          md: '2rem',
          lg: '-3',
          xl: '-5',
          xxl: '-5',
        }}
        width={{
          sm: '',
          md: '160px',
          lg: '200px',
          xl: '',
          xxl: '',
        }}
        minWidth={{
          sm: '',
          md: '160px',
          lg: '',
          xl: '',
          xxl: '',
        }}
        height={{
          sm: '',
          md: '220px',
          lg: '280px',
          xl: '',
          xxl: '',
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
