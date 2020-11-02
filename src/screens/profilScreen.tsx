import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import DarkButton from '../components/button/darkButton';
import ImageButton from '../components/button/imageButton';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Icons } from '../constants/icons';
import { Margins } from '../constants/margins';
import { Spaces } from '../constants/spaces';
import * as Linking from 'expo-linking';
import { SocialUrls } from '../constants/urls';

const ProfilScreen = () => {
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Profil'} canGoBack={false}>
        <View style={[styles.container, styles.center]}>
          <DarkButton
            text={'Adatok szerkesztése'}
            onPress={onEditPress}
            style={styles.darkButton}
          />
          <DarkButton
            text={'Adatkezelési tájékoztató'}
            onPress={onTermsPress}
            style={styles.darkButton}
          />
          <DarkButton
            text={'Kapcsolat'}
            onPress={onContactPress}
            style={styles.darkButton}
          />
        </View>
        <View style={[styles.row, styles.center, Margins.mbBig]}>
          <ImageButton
            icon={Icons.facebook_icon}
            onPress={onFacebookPress}
            style={styles.imageButton}
          />
          <ImageButton
            icon={Icons.instagram_icon}
            onPress={onInstagramPress}
            style={styles.imageButton}
          />
          <ImageButton
            icon={Icons.youtube_icon}
            onPress={onYoutubePress}
            style={styles.imageButton}
          />
        </View>
      </PagesTemplate>
    </View>
  );
};

const onEditPress = () => {};
const onTermsPress = () => {};
const onContactPress = () => {};
const onFacebookPress = () => {
  Linking.openURL(SocialUrls.FACEBOOK);
};
const onInstagramPress = () => {
  Linking.openURL(SocialUrls.INSTAGRAM);
};
const onYoutubePress = () => {
  Linking.openURL(SocialUrls.YOUTUBE);
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  darkButton: {
    width: '80%',
    marginVertical: Spaces.small
  },
  imageButton: {
    marginHorizontal: Spaces.normal
  }
});

export default ProfilScreen;
