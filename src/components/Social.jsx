import React from 'react';
import { IconButton, Flex } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useToast } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Social = () => {
  const notification = useToast();
  const { t } = useTranslation();

  const notificationAndCopyToClipboard = () => {
    notification({
      title: t('EmailCopied.1'),
      description: t('EmailCopiedClipboard.1'),
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
        boxShadow='lg'
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
          title='GitHub'
        >
          <IconButton
            mr='1'
            fontSize='1.5rem'
            aria-label='RedirectToGitHubButton'
          >
            <FaGithub />
          </IconButton>
        </a>
        <a
          href='https://www.linkedin.com/in/nahuelmarquez/'
          target='_blank'
          rel='noreferrer'
          title='Linkedin'
        >
          <IconButton
            mr='1'
            fontSize='1.5rem'
            aria-label='RedirectToLinkedinButton'
          >
            <FaLinkedin />
          </IconButton>
        </a>
        <IconButton
          title='Gmail address'
          fontSize='1.5rem'
          aria-label='GetMyEmailAddressButton'
          onClick={() => notificationAndCopyToClipboard()}
        >
          <FaEnvelope />
        </IconButton>
      </Flex>
    </>
  );
};

export default Social;
