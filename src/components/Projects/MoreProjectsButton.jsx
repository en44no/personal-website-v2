import React from 'react';
import { Button } from '@chakra-ui/react';
import { UilGithubAlt } from '@iconscout/react-unicons';

const MoreProjectsButton = () => {
  return (
    <>
      <a
        href='https://github.com/en44no?tab=repositories'
        target='_blank'
        rel='noreferrer'
        title='GitHub Projects'
      >
        <Button leftIcon={<UilGithubAlt size='1.4rem' />} bg='#11BAE5'>
          Ver más proyectos
        </Button>
      </a>
    </>
  );
};

export default MoreProjectsButton;
