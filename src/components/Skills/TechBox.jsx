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
            mobile: '1',
            tablet: '5',
            laptop: '2',
            desktop: '5',
            largeDesktop: '5',
          }}
          as="article"
          boxShadow="md"
          mb={{ mobile: '0.5rem', tablet: '1rem', laptop: '0' }}
          w={{
            mobile: '6.5rem',
            tablet: '6.5rem',
            laptop: '6.5rem',
            desktop: '9rem',
            largeDesktop: '9rem',
          }}
          h={{
            mobile: '7rem',
            tablet: '8rem',
            laptop: '7rem',
            desktop: '8rem',
            largeDesktop: '8rem',
          }}
          bg="white"
          p={{
            mobile: '2',
            tablet: '4',
            laptop: '2',
            desktop: '4',
            largeDesktop: '4',
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
              mobile: '13px',
              tablet: '13px',
              laptop: '',
            }}
            mt={{
              mobile: '0.5rem',
              tablet: '0.5rem',
              laptop: '',
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
