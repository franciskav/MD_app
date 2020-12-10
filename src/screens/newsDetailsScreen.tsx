import { StackNavigationState } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Margins } from '../constants/margins';
import { Spaces } from '../constants/spaces';
import { News } from '../model/news/news';

interface TermsScreenProps {
  navigation: StackNavigationProp<any>;
  route: any;
}

const NewsDetailsScreen = ({ navigation, route }: TermsScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };
  const news: News = route.params.item;

  return (
    <View style={styles.container}>
      <PagesTemplate title={''} canGoBack={true} onPress={onBackPress}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Image source={{ uri: news.image }} style={styles.image} />
          <View style={styles.line} />
          <Text
            style={[styles.titleText, Margins.mtSmall, Margins.mbExtraLarge]}
          >
            {news.title}
          </Text>
          <Text style={styles.descriptionText}>{news.details}</Text>
          <View style={[styles.line, Margins.mbBig]} />
        </ScrollView>
      </PagesTemplate>
    </View>
  );
};

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    alignItems: 'center'
  },
  image: {
    width: WIDTH,
    height: WIDTH * 0.57
  },
  line: {
    backgroundColor: Colors.yellow,
    width: '80%',
    maxWidth: 450,
    height: Spaces.small,
    marginVertical: Spaces.small
  },
  titleText: {
    width: '80%',
    maxWidth: 450,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.large,
    textAlign: 'center'
  },
  descriptionText: {
    width: '90%',
    maxWidth: 550,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  }
});

export default NewsDetailsScreen;
