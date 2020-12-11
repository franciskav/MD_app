import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../store';
import { getData, postData } from '../store/data/data.actions';
import DarkTextInput from '../components/text-input/darkTextInput';
import { Colors } from '../constants/colors';
import { Margins } from '../constants/margins';
import RoundButton from '../components/button/roundButton';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { Strings } from '../constants/localization';

interface EditScreenProps {
  navigation: StackNavigationProp<any>;
}

const EditScreen = ({ navigation }: EditScreenProps) => {
  //state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { data, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.data
  );

  const dispatch = useDispatch();

  //személyes adatok lekérése
  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  //alert ha hiba volt
  useEffect(() => {
    failAction();
  }, [error]);

  //mezők beállítása
  useEffect(() => {
    setName(data.name);
  }, [data.name]);

  useEffect(() => {
    setPhone(data.phone);
  }, [data.phone]);

  useEffect(() => {
    setAddress(data.address);
  }, [data.address]);

  useEffect(() => {
    setButtonDisabled();
  }, [name, phone, address]);

  //alert sikeres küldés esetén
  const successAction = () => {
    Alert.alert(Strings.editSucces.title, Strings.editSucces.message);
  };

  const failAction = () => {
    if (error) {
      Alert.alert(Strings.editFailure.title, Strings.editFailure.message);
    }
  };

  //vissza navigálás
  const onBackPress = () => {
    navigation.pop();
  };

  //űrlap elküldése
  const onSendPress = () => {
    dispatch(
      postData(
        {
          name: name,
          phone: phone,
          address: address,
          dataAccepted: true,
          termsAccepted: true
        },
        successAction
      )
    );
  };

  //küldés gomb tiltása, ha nincsenek kitöltve a mezők
  const setButtonDisabled = () => {
    setDisabled(name === '' || phone === '' || address === '');
  };
  return (
    <View style={styles.container}>
      <PagesTemplate
        title={Strings.editData}
        canGoBack={true}
        onPress={onBackPress}
      >
        <View style={[styles.container, styles.center]}>
          <DarkTextInput
            placeholder={Strings.name}
            value={name}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setName}
            style={[Margins.mbNormal, styles.text]}
          />
          <DarkTextInput
            placeholder={Strings.phoneNumber}
            value={phone}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
            style={[Margins.mbNormal, styles.text]}
          />
          <DarkTextInput
            placeholder={Strings.address}
            value={address}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setAddress}
            style={[Margins.mbExtraLarge, styles.text]}
          />
          <RoundButton
            onPress={onSendPress}
            text={Strings.send}
            disabled={disabled}
          />
        </View>
      </PagesTemplate>
      {isLoading && <MDActivityIndicator />}
    </View>
  );
};

const MAX_WIDTH = 550;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    width: '90%',
    maxWidth: MAX_WIDTH
  }
});

export default EditScreen;
