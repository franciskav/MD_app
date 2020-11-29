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

interface LoginScreenProps {
  navigation: StackNavigationProp<any>;
}

const SignupScreen = ({ navigation }: LoginScreenProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_2, setPassword_2] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);

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
          name: name,
          email: email,
          password: password,
          phoneNumber: phone,
          address: address
        },
        successAction
      )
    );
  };
  const successAction = () => {
    navigation.replace(Screens.Home);
  };
  const failAction = () => {
    if (error) {
      Alert.alert('Hiba', error);
    }
  };
  const onLoginPress = () => {
    navigation.replace(Screens.Login);
  };
  const onTermsPressed = () => {
    setTermsChecked(!termsChecked);
  };
  const onDataPressed = () => {
    setDataChecked(!dataChecked);
  };
  return (
    <LoginTemplate
      buttonText={'Regisztráció'}
      change={'Már van fiókod? Jelentkezz be!'}
      onPressButton={onSignupPress}
      onPressChange={onLoginPress}
    >
      <LightTextInput
        placeholder={'Név'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setName}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={'Email'}
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
      <LightTextInput
        placeholder={'Jelszó újra'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword_2}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={'Telefonszám'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPhone}
        keyboardType={'phone-pad'}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={'Lakcím'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setAddress}
        style={[Margins.mbNormal]}
      />
      <View>
        <CheckboxRow
          checked={termsChecked}
          title={
            'Elolvastam és elfogadom az Adatkezelési Tájékoztatóban foglaltakat'
          }
          onPress={onTermsPressed}
        />
        <CheckboxRow
          checked={dataChecked}
          title={
            'Hozzájárulok a fenti adataim Adatkezelő által történő kezeléséhez.'
          }
          onPress={onDataPressed}
        />
      </View>
      {isLoading && <MDActivityIndicator />}
    </LoginTemplate>
  );
};

export default SignupScreen;
