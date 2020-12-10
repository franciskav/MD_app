import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ListRenderItemInfo } from 'react-native';
import MDButtonGroup from '../components/button/mdButtonGroup';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import TimetableCard from '../components/card/timetableCard';
import { useSelector, useDispatch } from 'react-redux';
import { IApplicationState } from '../../store';
import { getTimetable } from '../store/timetable/timetable.actions';
import { FlatList } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-material-dropdown';
import { Spaces } from '../constants/spaces';
import { Class, Day, Place, Timetable } from '../model/timetable/timetable';
import RoundButton from '../components/button/roundButton';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { Margins } from '../constants/margins';
import TeachersTemplate from '../components/modal/teachersTemplate';
import { Strings } from '../constants/localization';

const TimetableScreen = () => {
  const { timetable, error, isLoading } = useSelector(
    (state: IApplicationState) => state.app.timetable
  );

  const [place, setPlace] = useState(0);
  const [day, setDay] = useState('monday_wednesday');
  const [showTeacher, setShowTeacher] = useState(false);

  const buttons = [
    'Arany János\nStúdió',
    'Asztória Stúdió\nA terem',
    'Asztória Stúdió\nB terem'
  ];

  const buttonsValue = ['arany', 'astoria_a', 'astoria_b'];

  const data: DropdownData[] = [
    {
      label: 'Hétfő & Szerda',
      value: 'monday_wednesday'
    },
    {
      label: 'Kedd & Csütörtök',
      value: 'tuesday_thursday'
    },
    {
      label: 'Péntek',
      value: 'friday'
    }
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimetable());
  }, [dispatch]);

  const onPressCard = () => {
    setShowTeacher(!showTeacher);
  };

  const onPressTecher = () => {
    setShowTeacher(!showTeacher);
  };

  const renderItem = (itemInfo: ListRenderItemInfo<any>) => {
    const { time, agelimit, teacher, description } = itemInfo.item;
    return (
      <TimetableCard
        onPress={onPressCard}
        time={time}
        description={description}
        teacher={teacher}
        age={agelimit}
      />
    );
  };

  const separatorComponent = () => {
    return <View style={{ height: Spaces.medium }} />;
  };

  const emptyComponent = () => {
    return (
      <View>
        <Text style={styles.emptyText}>{Strings.emptyTimetable}</Text>
      </View>
    );
  };

  const onRefresh = () => {
    dispatch(getTimetable());
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={Strings.timetable} canGoBack={false}>
        <View style={[styles.center, styles.container]}>
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
          {timetable.places.length > 0 && (
            <FlatList
              style={styles.flatlist}
              data={
                timetable.places[place].days[
                  timetable.places[place].days.findIndex(d => d.day === day)
                ].classes
              }
              renderItem={renderItem}
              ItemSeparatorComponent={separatorComponent}
              contentContainerStyle={styles.flatlistContent}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={emptyComponent}
            />
          )}
          {error && (
            <View style={[styles.errorView]}>
              <Text style={[styles.emptyText, Margins.mbMedium]}>
                {Strings.timetableError}
              </Text>
              <RoundButton text={Strings.again} onPress={onRefresh} />
            </View>
          )}
        </View>
      </PagesTemplate>
      {showTeacher && (
        <TeachersTemplate onPress={onPressTecher} show={showTeacher} />
      )}
      {isLoading && <MDActivityIndicator />}
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
  },
  flatlist: {
    width: '100%',
    paddingTop: Spaces.medium
  },
  flatlistContent: {
    paddingBottom: 50
  },
  emptyText: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal,
    textAlign: 'center'
  },
  errorView: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default TimetableScreen;
