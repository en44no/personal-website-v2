import React from 'react';
import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { UilFileDownloadAlt } from '@iconscout/react-unicons';
import ResumeEN from '../../assets/Resume_en.pdf';
import ResumeES from '../../assets/Resume_es.pdf';

const Resume = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <a
        download={
          i18n.language === 'es'
            ? 'NAHUEL MARQUEZ CV ES'
            : 'NAHUEL MARQUEZ CV EN'
        }
        href={i18n.language === 'es' ? ResumeES : ResumeEN}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          bg="#11BAE5"
          boxShadow="md"
          mt="3"
          aria-label="downloadCVButton"
          leftIcon={<UilFileDownloadAlt size="1.4rem" />}
        >
          {t('DownloadCV.1')}
        </Button>
      </a>
    </>
  );
};

export default Resume;
