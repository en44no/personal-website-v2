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
            mobile: '460px', tablet: '350px', laptop: '300px', desktop: '460px', largeDesktop: '460px',
          }}
          h={{
            mobile: '212px', tablet: '160px', laptop: '160px', desktop: '212px', largeDesktop: '212px',
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
