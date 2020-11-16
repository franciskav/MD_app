import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Margins } from '../constants/margins';
import { Dropdown } from 'react-native-material-dropdown';
import CheckboxRow from '../components/checkbox/checkboxRow';
import { ScrollView } from 'react-native-gesture-handler';
import { Spaces } from '../constants/spaces';
import DarkTextInput from '../components/text-input/darkTextInput';
import RoundButton from '../components/button/roundButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateButton from '../components/button/dateButton';

const AbsenceScreen = () => {
  const [evi, setEvi] = useState(false);
  const [alex, setAlex] = useState(false);
  const [dani, setDani] = useState(false);
  const [zsolt, setZsolt] = useState(false);

  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [showFrom, setShowFrom] = useState(false);
  const [toDate, setToDate] = useState(new Date(Date.now()));
  const [showTo, setShowTo] = useState(false);

  const [comment, setComment] = useState('');

  const onSendPress = () => {};

  const onFromButtonPress = () => {
    setShowFrom(!showFrom);
  };
  const onToButtonPress = () => {
    setShowTo(!showTo);
  };
  const onFromChange = (event, selectedDate) => {
    const currentDate = selectedDate || fromDate;
    setShowFrom(Platform.OS === 'ios');
    setFromDate(currentDate);
  };
  const onToChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setShowTo(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  const onEviPress = () => {
    setEvi(!evi);
  };
  const onAlexPress = () => {
    setAlex(!alex);
  };
  const onDaniPress = () => {
    setDani(!dani);
  };
  const onZsoltPress = () => {
    setZsolt(!zsolt);
  };
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Hiányzás'} canGoBack={false}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.center}
        >
          {renderLabel('Melyik órákról?')}
          {renderCheckBox(evi, 'Évi', onEviPress)}
          {renderCheckBox(alex, 'Alex', onAlexPress)}
          {renderCheckBox(dani, 'Dani', onDaniPress)}
          {renderCheckBox(zsolt, 'Zsolt', onZsoltPress)}

          <View style={[styles.row, Margins.mtExtraLarge]}>
            <DateButton
              onPress={onFromButtonPress}
              text={fromDate.toLocaleDateString()}
            />
            <Text style={styles.fromToText}> {'-'}</Text>
            <DateButton
              onPress={onToButtonPress}
              text={toDate.toLocaleDateString()}
            />
          </View>

          {showFrom && (
            <DateTimePicker
              style={{ width: '100%' }}
              testID="dateTimePicker"
              value={fromDate}
              mode={'date'}
              onChange={onFromChange}
              is24Hour={true}
              display="default"
              minimumDate={new Date(Date.now())}
              maximumDate={new Date(2020, 12)}
            />
          )}

          {showTo && (
            <DateTimePicker
              style={{ width: '100%' }}
              testID="dateTimePicker"
              value={fromDate}
              onChange={onToChange}
              mode={'date'}
              is24Hour={true}
              display="default"
              minimumDate={new Date(Date.now())}
              maximumDate={new Date(2020, 12)}
            />
          )}

          <DarkTextInput
            style={[styles.textInput, Margins.mtExtraLarge]}
            value={comment}
            onChangeText={setComment}
            placeholder={'Megjegyzés'}
          />
          <RoundButton
            text={'Küldés'}
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

const renderCheckBox = (
  checked: boolean,
  text: string,
  onPress: () => void
) => {
  return (
    <CheckboxRow
      checked={checked}
      onPress={onPress}
      title={text}
      titleStyle={styles.checkboxTitle}
      style={styles.checkbox}
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
  row: {
    flexDirection: 'row',
    width: '90%',
    maxWidth: MAX_WIDTH,
    justifyContent: 'center'
  },
  label: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal,
    width: '90%',
    maxWidth: MAX_WIDTH
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
  },
  fromToText: {
    width: 40,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.large,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

const times: Times[] = [
  {
    day: 'Hétfő & Szerda',
    time: [
      {
        checked: false,
        text: '15:00'
      },
      {
        checked: false,
        text: '16:00'
      },
      {
        checked: false,
        text: '17:00'
      },
      {
        checked: false,
        text: '18:00'
      },
      {
        checked: false,
        text: '19:10'
      },
      {
        checked: false,
        text: '20:15'
      }
    ]
  },
  {
    day: 'Kedd & Csütörtök',
    time: [
      {
        checked: false,
        text: '15:00'
      },
      {
        checked: false,
        text: '16:00'
      },
      {
        checked: false,
        text: '17:00'
      },
      {
        checked: false,
        text: '18:00'
      },
      {
        checked: false,
        text: '19:10'
      },
      {
        checked: false,
        text: '20:15'
      }
    ]
  },
  {
    day: 'Péntek',
    time: [
      {
        checked: false,
        text: '16:00'
      },
      {
        checked: false,
        text: '17:15'
      },
      {
        checked: false,
        text: '19:00'
      }
    ]
  }
];

const danceStyles: DropdownData[] = [
  {
    label: 'Hip Hop',
    value: 0
  },
  {
    label: 'Vogue',
    value: 1
  },
  {
    label: 'Mindkettő',
    value: 2
  }
];

const places: DropdownData[] = [
  {
    label: 'Astória Stúdió',
    value: 0
  },
  {
    label: 'Arany János Stúdió',
    value: 1
  }
];

const startDates: DropdownData[] = [
  {
    label: 'Mai napon',
    value: 0
  },
  {
    label: 'Ezen a héten',
    value: 1
  },
  {
    label: 'Jövő héten',
    value: 2
  },
  {
    label: 'Jövő hónaptól',
    value: 3
  }
];

export default AbsenceScreen;
