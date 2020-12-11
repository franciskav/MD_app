import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import LightTextInput from '../components/text-input/lightTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { postSignup } from '../store/signup/signup.actions';
import { Alert } from 'react-native';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { ErrorCode, Strings } from '../constants/localization';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const SignupScreen = ({ navigation }: LoginScreenProps) => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword_2] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { signup, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.signup
  );

  const dispatch = useDispatch();

  //alert hiba esetén
  useEffect(() => {
    failAction();
  }, [error]);

  useEffect(() => {
    setButtonDisabled();
  }, [email, password, password_2]);

  //jelszavak ellenőrzése regsiztráció előtt
  const onSignupPress = () => {
    if (password === password_2) {
      dispatch(
        postSignup(
          {
            email: email,
            password: password
          },
          successAction
        )
      );
    } else {
      Alert.alert(
        Strings.passwordsNotMatch.title,
        Strings.passwordsNotMatch.message
      );
    }
  };

  //sikeres küldés esetén továbbnavigálunk
  const successAction = () => {
    navigation.replace(Screens.Data);
  };
  const failAction = () => {
    if (error) {
      Alert.alert(Strings.error, ErrorCode[error]);
    }
  };

  //váltás bejelentkezésre
  const onLoginPress = () => {
    navigation.replace(Screens.Login);
  };

  //küldés gomb tiltása, ha nincsenek kitöltve a mezők
  const setButtonDisabled = () => {
    setDisabled(email === '' || password === '' || password_2 === '');
  };
  return (
    <LoginTemplate
      buttonText={Strings.singup}
      change={Strings.goSignup}
      onPressButton={onSignupPress}
      onPressChange={onLoginPress}
      buttonDisabled={disabled}
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
