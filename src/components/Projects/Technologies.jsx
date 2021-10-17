import React from 'react';
import { Box, Badge } from '@chakra-ui/react';

const Technologies = (props) => {
  const techs = props.techs;

  return (
    <>
      <Box mr='0' mt='2' display='flex'>
        <>
          {techs.map((t) => (
            <a href={t.link} target='_blank' rel='noreferrer' title='Demo'>
              <Badge
                borderRadius='full'
                fontWeight='semibold'
                fontSize='0.8rem'
                mr='2'
                px='2'
                py='0.5'
                mt='3'
                bgGradient='linear(to-r, cyan.400, blue.500, purple.600)'
                _hover={{
                  transition: 'transform .2s',
                  transform: 'scale(1.06)',
                }}
                cursor='pointer'
              >
                {t.name}
              </Badge>
            </a>
          ))}
        </>
      </Box>
    </>
  );
};

export default Technologies;
