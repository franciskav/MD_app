import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import LightTextInput from '../components/text-input/lightTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CheckboxRow from '../components/checkbox/checkboxRow';
import { View } from 'react-native';
import { IApplicationState } from '../../store';
import { postSignup } from '../store/signup/signup.actions';
import { Alert } from 'react-native';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { ErrorCode, Strings } from '../constants/localization';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const SignupScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword_2] = useState('');

  const { signup, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.signup
  );

  const dispatch = useDispatch();

  useEffect(() => {
    failAction();
  }, [error]);

  const onSignupPress = () => {
    dispatch(
      postSignup(
        {
          email: email,
          password: password
        },
        successAction
      )
    );
  };
  const successAction = () => {
    navigation.replace(Screens.Data);
  };
  const failAction = () => {
    if (error) {
      Alert.alert('Hiba', ErrorCode[error]);
    }
  };
  const onLoginPress = () => {
    navigation.replace(Screens.Login);
  };
  return (
    <LoginTemplate
      buttonText={Strings.singup}
      change={Strings.goSignup}
      onPressButton={onSignupPress}
      onPressChange={onLoginPress}
    >
      <LightTextInput
        placeholder={Strings.emailAddress}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={Strings.password}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={Strings.passwordAgain}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword_2}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />

      {isLoading && <MDActivityIndicator />}
    </LoginTemplate>
  );
};

export default SignupScreen;
