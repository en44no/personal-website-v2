import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';

const List = () => {
  const { t } = useTranslation();

  return (
    <>
      <Grid
        templateColumns={{
          mobile: 'repeat(1, 1fr)',
          tablet: 'repeat(2, 1fr)',
          laptop: 'repeat(2, 1fr)',
        }}
        position="relative"
      >
        <GridItem
          pl={{ mobile: '2', tablet: '2', laptop: '6' }}
          pt={{ mobile: '7rem', tablet: '0', laptop: '6' }}
          pr={{ mobile: '2', tablet: '2', laptop: '6' }}
          pb={{ mobile: '2', tablet: '0', laptop: '6' }}
        >
          <Layout
            appType={t('ToDoAppType.1')}
            appTitle={t('ToDoAppTitle.1')}
            codeLink="https://github.com/en44no/todo-app"
            demoLink="https://todo-app-en44no.vercel.app/"
            appImage="https://user-images.githubusercontent.com/57118285/138615565-0fcfc242-7bb2-4113-a07f-9e901d8c3826.png"
            techs={[
              { name: 'ReactJS', link: 'https://es.reactjs.org/' },
              { name: 'Chakra UI', link: 'https://chakra-ui.com/' },
            ]}
          />
        </GridItem>
        <GridItem
          pl={{ mobile: '2', tablet: '2', laptop: '6' }}
          pt={{ mobile: '3', tablet: '0', laptop: '6' }}
          pr={{ mobile: '2', tablet: '2', laptop: '6' }}
          pb={{ mobile: '8', tablet: '0', laptop: '6' }}
        >
          <Layout
            appType="Information"
            appTitle="List of Cryptos"
            codeLink="https://github.com/en44no/list-cryptos"
            demoLink="https://user-images.githubusercontent.com/57118285/139742834-a322f2a0-a26d-4b63-9dc3-eabe23559c97.jpeg"
            appImage="https://user-images.githubusercontent.com/57118285/139742834-a322f2a0-a26d-4b63-9dc3-eabe23559c97.jpeg"
            objectPosition="top"
            techs={[
              { name: 'React Native', link: 'https://reactnative.dev/' },
              { name: 'CoinGecko API', link: 'https://www.coingecko.com/es' },
            ]}
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default List;
