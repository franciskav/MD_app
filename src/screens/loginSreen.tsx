import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import LightTextInput from '../components/text-input/lightTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { ActivityIndicator, Alert } from 'react-native';
import { postLogin } from '../store/login/login.actions';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { postLogout } from '../store/logout/logout.actions';
import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorageKeys } from '../constants/asyncStorageKeys';
import { ErrorCode } from '../constants/localization';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.login
  );
  const dispatch = useDispatch();

  useEffect(() => {
    failAction();
  }, [error]);

  const onLoginPress = () => {
    dispatch(postLogin({ email: email, password: password }, successAction));
    //console.log(AsyncStorage.getItem(AsyncStorageKeys.UID));
  };
  const successAction = () => {
    navigation.replace(Screens.Home);
  };
  const failAction = () => {
    if (error) {
      Alert.alert('Hiba', ErrorCode[error]);
    }
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
      {isLoading && <MDActivityIndicator />}
    </LoginTemplate>
  );
};

export default LoginScreen;
