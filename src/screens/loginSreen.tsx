import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import LightTextInput from '../components/text-input/lightTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onLoginPress = () => {
    navigation.replace(Screens.Home);
  };
  const successAction = () => {
    //navigation.replace(Screens.Main)
  };
  const onRegisterPress = () => {
    navigation.replace(Screens.SignUp);
  };
  return (
    <LoginTemplate
      buttonText={'Bejelentkezés'}
      change={'Még nincs felhasználód? Regisztrálj!'}
      onPressButton={onLoginPress}
      onPressChange={onRegisterPress}
    >
      <LightTextInput
        placeholder={'Email cím'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={'Jelszó'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />
    </LoginTemplate>
  );
};

export default LoginScreen;
