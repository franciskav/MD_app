import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

const ApplyScreen = () => {
  const [danceStyle, setDanceStyle] = useState(0);
  const [place, setPlace] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [comment, setComment] = useState('');
  const onSendPress = () => {};
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Jelentkezés'} canGoBack={false}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.center}
        >
          {renderLabel('Melyik tácstílus érdekel?')}
          {renderDropdown(danceStyles, danceStyle, setDanceStyle)}
          {renderLabel('Melyik helyszín jó neked?')}
          {renderDropdown(places, place, setPlace)}
          {renderLabel('Mikor kezdenél?')}
          {renderDropdown(startDates, startDate, setStartDate)}
          {renderLabel('Melyik napokon jönnél?')}

          {renderLabel(times[0].day)}
          {times[0].time.map(item => renderCheckBox(item, 0))}
          {renderLabel(times[1].day)}
          {times[1].time.map(item => renderCheckBox(item, 1))}
          {renderLabel(times[2].day)}
          {times[2].time.map(item => renderCheckBox(item, 2))}
          <DarkTextInput
            style={[styles.textInput, Margins.mtLarge]}
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

const renderDropdown = (
  data: DropdownData[],
  value: number,
  onChangeText: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <Dropdown
      data={data}
      value={value}
      onChangeText={onChangeText}
      containerStyle={styles.dropdownContainer}
      style={styles.dropdown}
      itemTextStyle={styles.dropdownText}
    />
  );
};

const renderCheckBox = (item: CheckboxItem, idx: number) => {
  const onPress = () => {
    const index = times[idx].time.findIndex(time => item.text === time.text);
    times[idx].time[index].checked = !times[idx].time[index].checked;
    console.warn(`pressed${idx} ${index} ${item.checked}`);
  };
  return (
    <CheckboxRow
      checked={item.checked}
      onPress={onPress}
      title={item.text}
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

export default ApplyScreen;
