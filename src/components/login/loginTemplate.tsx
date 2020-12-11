import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../../constants/colors';
import { Margins } from '../../constants/margins';
import { Icons } from '../../constants/icons';
import { Fonts, FontSizes } from '../../constants/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import RoundButton from '../button/roundButton';
import Constants from 'expo-constants';
import { Spaces } from '../../constants/spaces';

interface Props {
  buttonText: string;
  change?: string;
  onPressButton: () => void;
  onPressChange?: () => void;
  children: React.ReactNode;
  buttonDisabled?: boolean;
}

const LoginTemplate = ({
  buttonText,
  change,
  onPressButton,
  onPressChange,
  children,
  buttonDisabled
}: Props) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.boxView}>
          <Image source={Icons.logo} style={[Margins.mbBig, Margins.mtBig]} />
          {children}
          <RoundButton
            style={[Margins.mtBig, Margins.mbBig]}
            text={buttonText}
            onPress={onPressButton}
            disabled={buttonDisabled}
          />
          <Text
            style={[styles.simpleText, Margins.mbBig]}
            onPress={onPressChange}
          >
            {change}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    backgroundColor: Colors.yellow
  },
  boxView: {
    width: '90%',
    minHeight: '60%',
    backgroundColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spaces.medium,
    marginTop: Constants.statusBarHeight
  },
  simpleText: {
    color: Colors.white,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.small
  },
  scrollView: {
    flex: 1,
    backgroundColor: Colors.yellow
  }
});

export default LoginTemplate;
