import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, ListRenderItemInfo } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import NewsCard from '../components/card/newsCard';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Screens } from '../constants/screens';
import { Spaces } from '../constants/spaces';

const mock = [
  {
    date: '2020. szeptember 13.',
    title: 'MD Open Friday - vol 1',
    image: require('../../assets/new_group.jpg')
  },
  {
    date: '2020. október 03.',
    title: 'Esemény',
    image: require('../../assets/open_fri.jpg')
  },
  {
    date: '2020. szeptember 13.',
    title: 'MD Open Friday - vol 1',
    image: require('../../assets/new_group.jpg')
  },
  {
    date: '2020. szeptember 13.',
    title: 'MD Open Friday - vol 1',
    image: require('../../assets/new_group.jpg')
  }
];

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen = ({ navigation }: LoginScreenProps) => {
  const onItemPress = () => {
    navigation.navigate(Screens.NewsDetails);
  };

  const renderItem = (itemInfo: ListRenderItemInfo<any>) => {
    const { date, title, image } = itemInfo.item;
    return (
      <NewsCard onPress={onItemPress} date={date} title={title} image={image} />
    );
  };

  const separatorComponent = () => {
    return <View style={{ height: Spaces.extraLarge }} />;
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={'Hírek és események'} canGoBack={false}>
        <FlatList
          data={mock}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorComponent}
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContent}
        />
      </PagesTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center'
  },
  flatlist: {
    flex: 1,
    width: '100%',
    paddingTop: Spaces.large
  },
  flatlistContent: {
    alignItems: 'center',
    paddingBottom: 50
  }
});

export default HomeScreen;
