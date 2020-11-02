import React, { useState, useEffect } from 'react';
import LoginTemplate from '../components/login/loginTemplate';
import UnderlineTextInput from '../components/text-input/underlineTextInput';
import { StackNavigationProp } from '@react-navigation/stack';
import { Margins } from '../constants/margins';
import { Screens } from '../constants/screens';
import { Colors } from '../constants/colors';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import CheckboxRow from '../components/checkbox/checkboxRow';
import { View } from 'react-native';

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

  const dispatch = useDispatch();

  const onSignupPress = () => {
    navigation.replace(Screens.Home);
  };
  const successAction = () => {
    //navigation.replace(Screens.Main)
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
      <UnderlineTextInput
        placeholder={'Név'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setName}
        style={[Margins.mbNormal]}
      />
      <UnderlineTextInput
        placeholder={'Email'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        style={[Margins.mbNormal]}
      />
      <UnderlineTextInput
        placeholder={'Jelszó'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />
      <UnderlineTextInput
        placeholder={'Jelszó újra'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPassword_2}
        secureTextEntry={true}
        style={[Margins.mbNormal]}
      />
      <UnderlineTextInput
        placeholder={'Telefonszám'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPhone}
        keyboardType={'phone-pad'}
        style={[Margins.mbNormal]}
      />
      <UnderlineTextInput
        placeholder={'Lakcím'}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setAddress}
        style={[Margins.mbNormal]}
      />
      <View style={{ alignItems: 'flex-start' }}>
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
    </LoginTemplate>
  );
};

export default SignupScreen;
