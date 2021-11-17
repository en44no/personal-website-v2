import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TechBox = (props) => {
  const { link, title, techColor } = props;

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        title={`Link to ${title} page`}
      >
        <Box
          margin={{
            sm: '1', md: '2', lg: '2', xl: '3', xxl: '5',
          }}
          as="article"
          boxShadow="md"
          mb={{ sm: '0.5rem', md: '1rem', lg: '0' }}
          w={{
            sm: '6.5rem', md: '6rem', lg: '6.5rem', xl: '8rem', xxl: '9rem',
          }}
          h={{
            sm: '7rem', md: '7rem', lg: '7rem', xl: '7rem', xxl: '8rem',
          }}
          bg="white"
          p={{
            sm: '2', md: '2', lg: '2', xl: '2', xxl: '4',
          }}
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.03)',
          }}
          borderRadius="9px"
        >
          <Box p="2" borderRadius="9px" textAlign="-webkit-center">
            <props.techIcon
              color={techColor}
              fontSize="50px"
              title={`Link to ${title} page`}
            />
          </Box>
          <Text
            as="h6"
            fontWeight="semibold"
            textAlign="center"
            fontSize={{
              sm: '13px', md: '13px', lg: null,
            }}
            mt={{
              sm: '0.5rem', md: '0.5rem', lg: null,
            }}
            mb="0"
            color={techColor}
          >
            {title}
          </Text>
        </Box>
      </a>
    </>
  );
};

export default TechBox;
