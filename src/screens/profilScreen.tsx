import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import DarkButton from '../components/button/darkButton';
import ImageButton from '../components/button/imageButton';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Icons } from '../constants/icons';
import { Margins } from '../constants/margins';
import { Spaces } from '../constants/spaces';
import * as Linking from 'expo-linking';
import { Urls } from '../constants/urls';
import { StackNavigationProp } from '@react-navigation/stack';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { useDispatch, useSelector } from 'react-redux';
import { postLogout } from '../store/logout/logout.actions';
import { IApplicationState } from '../../store';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { Strings } from '../constants/localization';

interface ProfilScreenProps {
  navigation: StackNavigationProp<any>;
}

const ProfilScreen = ({ navigation }: ProfilScreenProps) => {
  const { error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.logout
  );
  const dispatch = useDispatch();

  useEffect(() => {
    failAction();
  }, [error]);

  const onEditPress = () => {
    navigation.navigate(Screens.Edit);
  };
  const onTermsPress = () => {
    Linking.openURL(Urls.PRIVACY_POLICY);
  };
  const onContactPress = () => {
    navigation.navigate(Screens.Contact);
  };

  //közösségi oldalak megnyitása
  const onFacebookPress = () => {
    Linking.openURL(Urls.FACEBOOK);
  };
  const onInstagramPress = () => {
    Linking.openURL(Urls.INSTAGRAM);
  };
  const onYoutubePress = () => {
    Linking.openURL(Urls.YOUTUBE);
  };

  const onLogoutPress = () => {
    dispatch(postLogout(successAction));
  };

  //sikeres küldés esetén továbbnavigálunk
  const successAction = () => {
    navigation.replace(Screens.Login);
  };
  //alert hiba esetén
  const failAction = () => {
    if (error) {
      Alert.alert(Strings.logoutFailure.title, Strings.logoutFailure.message);
    }
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={Strings.profile} canGoBack={false}>
        <View style={[styles.container, styles.center]}>
          <DarkButton
            text={Strings.editData}
            onPress={onEditPress}
            style={styles.darkButton}
          />
          <DarkButton
            text={Strings.privacyPolicy}
            onPress={onTermsPress}
            style={styles.darkButton}
          />
          <DarkButton
            text={Strings.contact}
            onPress={onContactPress}
            style={styles.darkButton}
          />
          <Text
            style={[styles.logoutText, Margins.mtSmall]}
            onPress={onLogoutPress}
          >
            {Strings.logout}
          </Text>
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
        {isLoading && <MDActivityIndicator />}
      </PagesTemplate>
    </View>
  );
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
  },
  logoutText: {
    color: Colors.lightGrey,
    fontFamily: Fonts.Lato_regular_italic,
    fontSize: FontSizes.normal
  }
});

export default ProfilScreen;
