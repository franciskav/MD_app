import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Margins } from '../constants/margins';
import { Dropdown } from 'react-native-material-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import { Spaces } from '../constants/spaces';
import DarkTextInput from '../components/text-input/darkTextInput';
import RoundButton from '../components/button/roundButton';
import { IApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import { postApply } from '../store/apply/apply.actions';
import { Strings } from '../constants/localization';

const ApplyScreen = () => {
  //state
  const [danceStyle, setDanceStyle] = useState('hip_hop');
  const [place, setPlace] = useState('astoria');
  const [startDate, setStartDate] = useState('today');
  const [comment, setComment] = useState('');

  const { apply, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.apply
  );

  const dispatch = useDispatch();

  useEffect(() => {
    failAction();
  }, [error]);

  //alert sikeres küldés esetén
  const successAction = () => {
    Alert.alert(Strings.applySucces.title, Strings.applySucces.message);
  };

  //alert hiba esetén
  const failAction = () => {
    if (error) {
      Alert.alert(Strings.applyFailure.title, Strings.applyFailure.message);
    }
  };

  //űrlap elküldése
  const onSendPress = () => {
    dispatch(
      postApply(
        {
          style: danceStyle,
          place: place,
          startDate: startDate,
          comment: comment
        },
        successAction
      )
    );
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={Strings.apply} canGoBack={false}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.center}
        >
          {renderLabel(Strings.whichDanceStyle)}
          {renderDropdown(danceStyles, danceStyle, setDanceStyle)}
          {renderLabel(Strings.whichPlace)}
          {renderDropdown(places, place, setPlace)}
          {renderLabel(Strings.whenYouStart)}
          {renderDropdown(startDates, startDate, setStartDate)}

          <DarkTextInput
            style={[styles.textInput, Margins.mtLarge]}
            value={comment}
            onChangeText={setComment}
            placeholder={Strings.comment}
          />
          <RoundButton
            text={Strings.send}
            onPress={onSendPress}
            style={[Margins.mtBig, Margins.mbBig]}
          />
        </ScrollView>
      </PagesTemplate>
    </View>
  );
};

const renderLabel = (text: string) => {
  return <Text style={[styles.label, Margins.mtLarge]}>{text}</Text>;
};

const renderDropdown = (
  data: DropdownData[],
  value: string,
  onChangeText: React.Dispatch<React.SetStateAction<string>>
) => {
  return (
    <Dropdown
      data={data}
      value={value}
      onChangeText={onChangeText}
      containerStyle={styles.dropdownContainer}
      itemTextStyle={styles.dropdownText}
    />
  );
};

const MAX_WIDTH = 550;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center'
  },
  label: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal,
    width: '90%',
    maxWidth: MAX_WIDTH
  },
  dropdown: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  },
  dropdownContainer: {
    width: '90%',
    maxWidth: MAX_WIDTH,
    marginTop: -Spaces.big
  },
  dropdownText: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  },
  checkbox: {
    width: '100%',
    maxWidth: MAX_WIDTH,
    marginVertical: -10
  },
  checkboxTitle: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal
  },
  textInput: {
    width: '90%',
    maxWidth: MAX_WIDTH
  }
});

const danceStyles: DropdownData[] = [
  {
    label: 'Hip Hop',
    value: 'hip_hop'
  },
  {
    label: 'Vogue',
    value: 'vogue'
  },
  {
    label: 'Mindkettő',
    value: 'both'
  }
];

const places: DropdownData[] = [
  {
    label: 'Astória Stúdió',
    value: 'astoria'
  },
  {
    label: 'Arany János Stúdió',
    value: 'arany'
  },
  {
    label: 'Mindkettő',
    value: 'both'
  }
];

const startDates: DropdownData[] = [
  {
    label: 'Mai napon',
    value: 'today'
  },
  {
    label: 'Ezen a héten',
    value: 'this_week'
  },
  {
    label: 'Jövő héten',
    value: 'next_week'
  },
  {
    label: 'Jövő hónaptól',
    value: 'next_month'
  }
];

export default ApplyScreen;
