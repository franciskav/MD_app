import React from 'react';
import { Colors } from '../../constants/colors';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text
} from 'react-native';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Spaces } from '../../constants/spaces';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  text: string;
  disabled?: boolean;
}

const DateButton = ({ onPress, style, text, disabled }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const BTN_HEIGHT = 50;
const BTN_WIDTH = 120;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: BTN_HEIGHT / 5,
    borderWidth: 2,
    borderColor: Colors.black,
    height: BTN_HEIGHT,
    minWidth: BTN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spaces.normal
    // shadowColor: Colors.middleGrey,
    // shadowOpacity: 1,
    // shadowRadius: 1,
    // shadowOffset: { height: 1, width: 1 },
    // elevation: 2
  },
  buttonText: {
    color: Colors.black,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.medium
  }
});

export default DateButton;
