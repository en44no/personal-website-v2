import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';

const Social = () => {
  const notification = useToast();

  const notificationAndCopyToClipboard = () => {
    notification({
      title: 'Correo electrónico copiado.',
      description: 'Dirección de Gmail copiada a tu portapapeles.',
      status: 'info',
      duration: 4000,
      position: 'bottom-right',
      isClosable: true,
    });
    navigator.clipboard.writeText('nahuelmarquez12@gmail.com');
  };

  return (
    <>
      <Flex
        alignSelf='flex-start'
        position='absolute'
        bottom='5'
        borderRadius='9px'
        boxShadow='md'
        p='3'
        _hover={{
          transition: 'transform .2s',
          transform: 'scale(1.02)',
        }}
      >
        <a
          href='https://github.com/en44no'
          target='_blank'
          rel='noreferrer'
          title='Clicking here you will be redirected to my GitHub account'
        >
          <IconButton mr='1' fontSize='1.5rem'>
            <FaGithub />
          </IconButton>
        </a>
        <a
          href='https://www.linkedin.com/in/nahuelmarquez/'
          target='_blank'
          rel='noreferrer'
          title='Clicking here you will be redirected to my Linkedin account'
        >
          <IconButton mr='1' fontSize='1.5rem'>
            <FaLinkedin />
          </IconButton>
        </a>
        <IconButton
          title='Clicking here you will get my email address'
          fontSize='1.5rem'
          onClick={() => notificationAndCopyToClipboard()}
        >
          <FaEnvelope />
        </IconButton>
      </Flex>
    </>
  );
};

export default Social;
