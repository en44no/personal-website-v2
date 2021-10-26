import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TechBox = (props) => {
  return (
    <>
      <a
        href={props.link}
        target='_blank'
        rel='noreferrer'
        title={`Link to ${props.title} page`}
      >
        <Box
          boxShadow='md'
          mb={{ sm: '1rem', md: '0', lg: '0' }}
          w={{
            sm: '6.5rem',
            md: '9rem',
            lg: '9rem',
          }}
          h='8rem'
          bg='white'
          p='4'
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.03)',
          }}
          borderRadius='9px'
        >
          <Box p='2' borderRadius='9px' textAlign='-webkit-center'>
            <props.techIcon
              color={props.techColor}
              fontSize='50px'
              title={`Link to ${props.title} page`}
            />
          </Box>
          <Text
            fontWeight='semibold'
            textAlign='center'
            fontSize={{
              sm: '13px',
              md: '',
              lg: '',
            }}
            mt={{
              sm: '0.5rem',
              md: '',
              lg: '',
            }}
            mb='0'
            color={props.techColor}
          >
            {props.title}
          </Text>
        </Box>
      </a>
    </>
  );
};

export default TechBox;
