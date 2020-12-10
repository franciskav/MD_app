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
import { Alert } from 'react-native';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { postData } from '../store/data/data.actions';
import { Strings } from '../constants/localization';

interface DataScreenProps {
  navigation: StackNavigationProp<any>;
}

const DataScreen = ({ navigation }: DataScreenProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const [dataChecked, setDataChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { dataRequest, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.data
  );

  const dispatch = useDispatch();

  useEffect(() => {
    failAction();
  }, [error]);

  useEffect(() => {
    setButtonDisabled();
  }, [name, phone, address, termsChecked, dataChecked]);

  const onSendPress = () => {
    dispatch(
      postData(
        {
          name: name,
          phone: phone,
          address: address,
          dataAccepted: dataChecked,
          termsAccepted: termsChecked
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
  const onTermsPressed = () => {
    setTermsChecked(!termsChecked);
  };
  const onDataPressed = () => {
    setDataChecked(!dataChecked);
  };
  const setButtonDisabled = () => {
    setDisabled(
      name === '' ||
        phone === '' ||
        address === '' ||
        termsChecked === false ||
        dataChecked === false
    );
  };
  return (
    <LoginTemplate
      buttonText={Strings.send}
      onPressButton={onSendPress}
      buttonDisabled={disabled}
    >
      <LightTextInput
        placeholder={Strings.name}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setName}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={Strings.phoneNumber}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setPhone}
        keyboardType={'phone-pad'}
        style={[Margins.mbNormal]}
      />
      <LightTextInput
        placeholder={Strings.address}
        placeholderTextColor={Colors.lightGrey}
        onChangeText={setAddress}
        style={[Margins.mbNormal]}
      />
      <View>
        <CheckboxRow
          checked={termsChecked}
          title={Strings.terms}
          onPress={onTermsPressed}
        />
        <CheckboxRow
          checked={dataChecked}
          title={Strings.data}
          onPress={onDataPressed}
        />
      </View>
      {isLoading && <MDActivityIndicator />}
    </LoginTemplate>
  );
};

export default DataScreen;
