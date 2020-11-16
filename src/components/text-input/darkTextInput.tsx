import React from 'react';
import { Colors } from '../../constants/colors';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Fonts, FontSizes } from '../../constants/fonts';

interface Props {
  ref: string;
}

const DarkTextInput = (props: TextInputProps) => {
  return <TextInput {...props} style={[styles.textInput, props.style]} />;
};

const styles = StyleSheet.create({
  textInput: {
    color: Colors.black,
    height: 40,
    width: '100%',
    padding: 10,
    fontSize: FontSizes.small,
    fontFamily: Fonts.Lato_regular,
    borderBottomWidth: 1,
    borderColor: Colors.black
  }
});

export default DarkTextInput;
