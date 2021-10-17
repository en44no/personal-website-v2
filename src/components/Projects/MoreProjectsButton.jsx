import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const MoreProjectsButton = () => {
  return (
    <>
      <a
        href='https://github.com/en44no?tab=repositories'
        target='_blank'
        rel='noreferrer'
        title='GitHub Projects'
      >
        <Button leftIcon={<FaGithub fontSize='1.2rem' />} bg='#11BAE5'>
          Ver más proyectos
        </Button>
      </a>
    </>
  );
};

export default MoreProjectsButton;
