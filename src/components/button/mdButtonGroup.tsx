import React, { useState } from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { ButtonGroup, ButtonGroupProps } from 'react-native-elements';
import { Colors } from '../../constants/colors';
import { Fonts, FontSizes } from '../../constants/fonts';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  selectedIndex: number;
  buttons: string[];
}

const MDButtonGroup = (props: ButtonGroupProps) => {
  return (
    <ButtonGroup
      {...props}
      containerStyle={styles.container}
      selectedButtonStyle={styles.selectedButton}
      innerBorderStyle={styles.innerBorder}
      textStyle={styles.text}
      selectedTextStyle={styles.text}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    height: 75,
    backgroundColor: Colors.yellow,
    borderWidth: 0,
    borderRadius: 0,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0
  },
  selectedButton: {
    backgroundColor: Colors.extraLightGrey,
    borderBottomColor: Colors.lightGrey,
    borderBottomWidth: 3
  },
  innerBorder: {
    color: Colors.extraLightGrey
  },
  text: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Lato_bold,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default MDButtonGroup;
