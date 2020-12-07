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

interface EditScreenProps {
  navigation: StackNavigationProp<any>;
}

const EditScreen = ({ navigation }: EditScreenProps) => {
  const { data, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.data
  );

  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const successAction = () => {
    Alert.alert('Adatok', 'Sikeresen megváltoztattad az adataid.');
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
        title={'Adatok szerkesztése'}
        canGoBack={true}
        onPress={onBackPress}
      >
        <View style={[styles.container, styles.center]}>
          <DarkTextInput
            placeholder={'Név'}
            value={name}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setName}
            style={[Margins.mbNormal]}
          />
          <DarkTextInput
            placeholder={'Telefonszám'}
            value={phone}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setPhone}
            keyboardType={'phone-pad'}
            style={[Margins.mbNormal]}
          />
          <DarkTextInput
            placeholder={'Lakcím'}
            value={address}
            placeholderTextColor={Colors.lightGrey}
            onChangeText={setAddress}
            style={[Margins.mbExtraLarge]}
          />
          <RoundButton onPress={onSendPress} text={'Küldés'} />
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
    justifyContent: 'center',
    paddingHorizontal: Spaces.medium
  }
});

export default EditScreen;
