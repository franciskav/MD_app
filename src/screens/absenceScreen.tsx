import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Alert,
  ListRenderItemInfo
} from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Margins } from '../constants/margins';
import { FlatList, ScrollView, State } from 'react-native-gesture-handler';
import { Spaces } from '../constants/spaces';
import DarkTextInput from '../components/text-input/darkTextInput';
import RoundButton from '../components/button/roundButton';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateButton from '../components/button/dateButton';
import { Strings } from '../constants/localization';
import AbsenceCard from '../components/card/absenceCard';
import { IApplicationState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMyClasses,
  postAbsence,
  setSelected
} from '../store/absence/absence.actions';
import MDActivityIndicator from '../components/activityIndicator/mdActivityIndicator';
import { AbsenceRequest } from '../model/absence/absenceRequest';

const AbsenceScreen = () => {
  //state
  const [fromDate, setFromDate] = useState(new Date(Date.now()));
  const [showFrom, setShowFrom] = useState(false);
  const [toDate, setToDate] = useState(new Date(Date.now()));
  const [showTo, setShowTo] = useState(false);
  const [comment, setComment] = useState('');

  const {
    absenceRequest,
    classes,
    getError,
    postError,
    isLoading
  } = useSelector((state: IApplicationState) => state.app.absence);

  const dispatch = useDispatch();

  //kurzusok lekérése képernyő megnyitásakor
  useEffect(() => {
    dispatch(getMyClasses());
  }, [dispatch]);

  //alert ha hiba volt
  useEffect(() => {
    failAction();
  }, [getError, postError]);

  const failAction = () => {
    if (getError) {
      Alert.alert(
        Strings.getClassesFailure.title,
        Strings.getClassesFailure.message
      );
    }
    if (postError) {
      Alert.alert(Strings.absenceFailure.title, Strings.absenceFailure.message);
    }
  };

  //alert sikeres küldés esetén
  const successAction = () => {
    Alert.alert(Strings.absenceSucces.title, Strings.absenceSucces.message);
  };

  //űrlap elküldése
  const onSendPress = () => {
    const courses: string[] = [];
    classes.forEach(c => {
      if (c.selected && c.id) {
        courses.push(c.id);
      }
    });

    const request: AbsenceRequest = {
      classes: courses,
      from: new Date(fromDate).getTime(),
      to: new Date(toDate).getTime(),
      comment: comment
    };

    dispatch(postAbsence(request, successAction));
  };

  const onFromButtonPress = () => {
    setShowFrom(!showFrom);
  };

  const onToButtonPress = () => {
    setShowTo(!showTo);
  };

  const onFromChange = (_event: any, selectedDate: any) => {
    const currentDate = selectedDate || fromDate;
    setShowFrom(Platform.OS === 'ios');
    setFromDate(currentDate);
  };

  const onToChange = (_event: any, selectedDate: any) => {
    const currentDate = selectedDate || toDate;
    setShowTo(Platform.OS === 'ios');
    setToDate(currentDate);
  };

  //kurzus lista elem
  const renderItem = (itemInfo: ListRenderItemInfo<any>) => {
    const { teacher, description, id, selected } = itemInfo.item;

    const onPressCard = () => {
      const idx = classes.findIndex(c => {
        return c.id === id;
      });
      const temp = classes;
      temp[idx].selected = !temp[idx].selected;
      dispatch(setSelected(temp));
    };
    return (
      <AbsenceCard
        onPress={onPressCard}
        teacher={teacher}
        description={description}
        checked={selected}
        style={Margins.mbNormal}
      />
    );
  };

  //üres lista elem
  const emptyComponent = () => {
    return (
      <View>
        <Text style={styles.emptyText}>{Strings.emptyTimetable}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <PagesTemplate title={Strings.missing} canGoBack={false}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.center}
        >
          {/* kurzusok lista */}
          {renderLabel(Strings.fromWhichClasses)}
          <FlatList
            key={1}
            data={classes}
            renderItem={renderItem}
            ListEmptyComponent={emptyComponent}
            style={styles.flatlist}
            contentContainerStyle={styles.flatlistContent}
            extraData={setSelected}
          />

          {/* dátumválasztó */}
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
              maximumDate={new Date(Date.now() + 2550000000)}
            />
          )}

          {showTo && (
            <DateTimePicker
              style={{ width: '100%' }}
              testID="dateTimePicker"
              value={toDate}
              onChange={onToChange}
              mode={'date'}
              is24Hour={true}
              display="default"
              minimumDate={new Date(Date.now())}
              maximumDate={new Date(Date.now() + 2550000000)}
            />
          )}

          {/* megjegyzés */}
          <DarkTextInput
            style={[styles.textInput, Margins.mtExtraLarge]}
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
      {isLoading && <MDActivityIndicator />}
    </View>
  );
};

const renderLabel = (text: string) => {
  return (
    <Text style={[styles.label, Margins.mtLarge, Margins.mbMedium]}>
      {text}
    </Text>
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
    width: '90%',
    maxWidth: MAX_WIDTH,
    marginBottom: Spaces.normal
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
  },
  emptyText: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal,
    textAlign: 'center'
  },
  flatlist: {
    width: '100%',
    paddingTop: Spaces.medium
  },
  flatlistContent: {
    paddingBottom: Spaces.small
  }
});

export default AbsenceScreen;
