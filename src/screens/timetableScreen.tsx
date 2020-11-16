import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MDButtonGroup from '../components/button/mdButtonGroup';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Dropdown } from 'react-native-material-dropdown';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import TimetableCard from '../components/card/timetableCard';

const TimetableScreen = () => {
  const [place, setPlace] = useState(0);
  const [day, setDay] = useState(0);
  const buttons = [
    'Arany János\nStúdió',
    'Asztória Stúdió\nA terem',
    'Asztória Stúdió\nB terem'
  ];

  const data: DropdownData[] = [
    {
      label: 'Hétfő & Szerda',
      value: 0
    },
    {
      label: 'Kedd & Csütörtök',
      value: 1
    },
    {
      label: 'Péntek',
      value: 2
    }
  ];

  return (
    <View style={styles.container}>
      <PagesTemplate title={'Órarend'} canGoBack={false}>
        <View style={styles.center}>
          <MDButtonGroup
            onPress={setPlace}
            selectedIndex={place}
            buttons={buttons}
          />
          <Dropdown
            data={data}
            value={day}
            onChangeText={setDay}
            containerStyle={styles.dropdownContainer}
            baseColor={Colors.black}
            textColor={Colors.white}
            itemColor={Colors.lightGrey}
            pickerStyle={{ backgroundColor: Colors.black }}
            lineWidth={0}
            style={styles.dropdown}
            itemTextStyle={styles.dropdownText}
          />
          <TimetableCard
            onPress={() => {}}
            time={'16:00-17:00'}
            description={'Új Kezdő Tini Hip-hop/ 12+ / Évivel - októbertől'}
          />
        </View>
      </PagesTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center'
  },
  dropdown: {
    backgroundColor: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.medium,
    paddingLeft: 10
  },
  dropdownContainer: {
    width: '90%',
    maxWidth: 550
  },
  dropdownText: {
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.medium
  }
});

export default TimetableScreen;
