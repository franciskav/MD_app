import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../store';
import { getData, postData } from '../store/data/data.actions';
import DarkTextInput from '../components/text-input/darkTextInput';
import { Colors } from '../constants/colors';
import { Margins } from '../constants/margins';
import RoundButton from '../components/button/roundButton';
import { Spaces } from '../constants/spaces';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { Strings } from '../constants/localization';

interface EditScreenProps {
  navigation: StackNavigationProp<any>;
}

const EditScreen = ({ navigation }: EditScreenProps) => {
  const { data, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.data
  );

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    failAction();
  }, [error]);

  useEffect(() => {
    setName(data.name);
  }, [data.name]);
  useEffect(() => {
    setPhone(data.phone);
  }, [data.phone]);
  useEffect(() => {
    setAddress(data.address);
  }, [data.address]);

  const successAction = () => {
    Alert.alert(Strings.editSucces.title, Strings.editSucces.message);
  };

  const failAction = () => {
    if (error) {
      Alert.alert(Strings.editFailure.title, Strings.editFailure.message);
    }
  };

  const onBackPress = () => {
    navigation.pop();
  };

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
          <RoundButton onPress={onSendPress} text={Strings.send} />
        </View>
      </PagesTemplate>
      {isLoading && <MDActivityIndicator />}
    </View>
  );
};

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
    maxWidth: 550
  }
});

export default EditScreen;
