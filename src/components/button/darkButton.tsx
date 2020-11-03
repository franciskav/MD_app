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

const DarkButton = ({ onPress, style, text, disabled }: Props) => {
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
const BTN_WIDTH = 380;

const styles = StyleSheet.create({
  buttonContainer: {
    height: BTN_HEIGHT,
    maxWidth: BTN_WIDTH,
    backgroundColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spaces.normal,
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    elevation: 2
  },
  buttonText: {
    color: Colors.yellow,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal
  }
});

export default DarkButton;
