import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListRenderItemInfo,
  RefreshControl
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import NewsCard from '../components/card/newsCard';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Screens } from '../constants/screens';
import { Spaces } from '../constants/spaces';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../store';
import { getNews } from '../store/news/news.actions';
import { News } from '../model/news/news';
import { Strings } from '../constants/localization';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const HomeScreen = ({ navigation }: LoginScreenProps) => {
  const { news, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.news
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const refreshNews = () => {
    dispatch(getNews());
  };

  const onItemPress = (id: string) => {
    const item = news.find((n: News) => n.id === id);
    navigation.navigate(Screens.NewsDetails, { item });
  };

  const renderItem = (itemInfo: ListRenderItemInfo<any>) => {
    const { id, date, title, image } = itemInfo.item;
    return (
      <NewsCard
        onPress={onItemPress}
        id={id}
        date={date}
        title={title}
        image={image}
      />
    );
  };

  const separatorComponent = () => {
    return <View style={{ height: Spaces.extraLarge }} />;
  };

  const keyExtractor = (item: News, index: number) => {
    return item.id + index;
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={Strings.newsAndEvents} canGoBack={false}>
        <FlatList
          keyExtractor={(item, index) => keyExtractor(item, index)}
          data={news}
          renderItem={renderItem}
          ItemSeparatorComponent={separatorComponent}
          style={styles.flatlist}
          contentContainerStyle={styles.flatlistContent}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={refreshNews} />
          }
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
