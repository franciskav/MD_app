import React from 'react';
import { StyleSheet } from 'react-native';
import { ButtonGroup, ButtonGroupProps } from 'react-native-elements';
import { Colors } from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

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
    backgroundColor: Colors.white,
    borderBottomColor: Colors.extraLightGrey,
    borderBottomWidth: 3
  },
  innerBorder: {
    color: Colors.white
  },
  text: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Lato_bold,
    fontSize: 16,
    textAlign: 'center'
  }
});

export default MDButtonGroup;
