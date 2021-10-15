import React from 'react';
import { Button } from '@chakra-ui/react';
import ResumeEN from '../../assets/Resume_en.pdf';
import ResumeES from '../../assets/Resume_es.pdf';
import { useTranslation } from 'react-i18next';

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
        target='_blank'
        rel='noreferrer'
      >
        <Button bg='#11BAE5' mt='3'>
          {t('DownloadCV.1')}
        </Button>
      </a>
    </>
  );
};

export default Resume;