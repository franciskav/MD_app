import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import LightTextInput from '../components/text-input/lightTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { IApplicationState } from '../../store';
import { Alert } from 'react-native';
import { postLogin } from '../store/login/login.actions';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { ErrorCode, Strings } from '../constants/localization';

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { login, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.login
  );
  const dispatch = useDispatch();

  //alert hiba esetén
  useEffect(() => {
    failAction();
  }, [error]);

  useEffect(() => {
    setButtonDisabled();
  }, [email, password]);

  const onLoginPress = () => {
    dispatch(postLogin({ email: email, password: password }, successAction));
  };

  //sikeres küldés esetén továbbnavigálunk
  const successAction = () => {
    navigation.replace(Screens.Home);
  };

  const failAction = () => {
    if (error) {
      Alert.alert(Strings.error, ErrorCode[error]);
    }
  };

  //váltás a regisztrációra
  const onRegisterPress = () => {
    navigation.replace(Screens.SignUp);
  };

  //küldés gomb tiltása, ha nincsenek kitöltve a mezők
  const setButtonDisabled = () => {
    setDisabled(email === '' || password === '');
  };

  return (
    <LoginTemplate
      buttonText={Strings.login}
      change={Strings.goSingup}
      onPressButton={onLoginPress}
      onPressChange={onRegisterPress}
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
      {isLoading && <MDActivityIndicator />}
    </LoginTemplate>
  );
};

export default LoginScreen;
