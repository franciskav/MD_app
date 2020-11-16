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
import { Margins } from '../../constants/margins';

interface Props {
  onPress: () => void;
  onLongPress?: () => void;
  style?: StyleProp<ViewStyle>;
  time: string;
  description: string;
  disabled?: boolean;
}

const TimetableCard = ({
  onPress,
  onLongPress,
  style,
  time,
  description,
  disabled
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
    >
      <Text style={[styles.timeText, Margins.mbNormal]}>{time}</Text>
      <Text style={[styles.descriptionText]}>{description}</Text>
    </TouchableOpacity>
  );
};

const BTN_MAX_WIDTH = 550;

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: BTN_MAX_WIDTH,
    width: '90%',
    backgroundColor: Colors.extraLightGrey,
    justifyContent: 'center',
    paddingHorizontal: Spaces.normal,
    paddingVertical: Spaces.medium,
    borderTopColor: Colors.yellow,
    borderTopWidth: 4,
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    elevation: 2
  },
  timeText: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.medium
  },
  descriptionText: {
    color: Colors.black,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.small
  }
});

export default TimetableCard;
