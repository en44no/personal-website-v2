import React from 'react';
import { Image } from '@chakra-ui/react';

const ProjectImage = (props) => {
  const {
    demoLink, appTitle, appImage,
  } = props;

  return (
    <>
      <a href={demoLink} target="_blank" rel="noreferrer" title="Demo">
        <Image
          loading="lazy"
          boxShadow="md"
          mt="2"
          mb="-2"
          src={appImage}
          alt={appTitle}
          w={{
            sm: '460px', md: '280px', lg: '300px', xl: '380px', xxl: '410px',
          }}
          h={{
            sm: '212px', md: '150px', lg: '160px', xl: '180px', xxl: '210px',
          }}
          borderRadius="9px"
          objectFit="cover"
          objectPosition="top"
          _hover={{
            transition: 'transform 1s, all 0.2s ease-in-out',
            transform: 'scale(1.02)',
          }}
        />
      </a>
    </>
  );
};

export default ProjectImage;
