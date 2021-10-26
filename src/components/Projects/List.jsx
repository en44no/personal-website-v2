import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const List = () => {
  const { t } = useTranslation();
  return (
    <>
      <Grid
        templateColumns={{
          sm: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(2, 1fr)',
        }}
        position='relative'
      >
        <GridItem
          pl={{ sm: '2', md: '2', lg: '6' }}
          pt={{ sm: '7rem', md: '0', lg: '6' }}
          pr={{ sm: '2', md: '2', lg: '6' }}
          pb={{ sm: '2', md: '0', lg: '6' }}
        >
          <Layout
            appType={t('ToDoAppType.1')}
            appTitle={t('ToDoAppTitle.1')}
            codeLink='https://github.com/en44no/todo-app'
            demoLink='https://todo-app-en44no.vercel.app/'
            appImage='https://user-images.githubusercontent.com/57118285/138615565-0fcfc242-7bb2-4113-a07f-9e901d8c3826.png'
            techs={[
              { name: 'ReactJS', link: 'https://es.reactjs.org/' },
              { name: 'Chakra UI', link: 'https://chakra-ui.com/' },
            ]}
          />
        </GridItem>
        <GridItem
          pl={{ sm: '2', md: '2', lg: '6' }}
          pt={{ sm: '3', md: '0', lg: '6' }}
          pr={{ sm: '2', md: '2', lg: '6' }}
          pb={{ sm: '8', md: '0', lg: '6' }}
        >
          <Layout
            appType='Example'
            appTitle='Example'
            codeLink='Example'
            demoLink='Example'
            appImage='https://us.123rf.com/450wm/roxanabalint/roxanabalint1308/roxanabalint130800213/21703166-ejemplo-grunge-sello-de-goma-ilustraci%C3%B3n-vectorial.jpg?ver=6'
            techs={[
              { name: 'Example', link: 'Example' },
              { name: 'Example', link: 'Example' },
            ]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default List;
