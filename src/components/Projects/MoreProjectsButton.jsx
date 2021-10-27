import React from 'react';
import { Button } from '@chakra-ui/react';
import { UilGithubAlt } from '@iconscout/react-unicons';
import { useTranslation } from 'react-i18next';

const MoreProjectsButton = () => {
  const { t } = useTranslation();
  return (
    <>
      <a
        href="https://github.com/en44no?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <Button
          aria-label="seeMoreProjectsButton"
          leftIcon={<UilGithubAlt size="1.4rem" />}
          bg="#11BAE5"
          boxShadow="md"
        >
          {t('SeeMoreProjects.1')}
        </Button>
      </a>
    </>
  );
};

export default MoreProjectsButton;
