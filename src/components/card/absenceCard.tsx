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
  style?: StyleProp<ViewStyle>;
  description: string;
  teacher?: string;
  checked?: boolean;
}

const AbsenceCard = ({
  onPress,
  style,
  description,
  teacher,
  checked
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        checked ? styles.checkedButtonContainer : styles.buttonContainer,
        style
      ]}
    >
      <Text
        style={[
          checked ? styles.checkedDescriptionText : styles.descriptionText
        ]}
      >
        {description}
        {teacher && ` / ${teacher}`}
      </Text>
    </TouchableOpacity>
  );
};

const BTN_MAX_WIDTH = 550;

const styles = StyleSheet.create({
  checkedButtonContainer: {
    maxWidth: BTN_MAX_WIDTH,
    width: '90%',
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: Spaces.normal,
    paddingVertical: Spaces.small,
    borderTopColor: Colors.middleGrey,
    borderTopWidth: 4,
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    elevation: 2
  },
  checkedDescriptionText: {
    color: Colors.black,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  },
  buttonContainer: {
    maxWidth: BTN_MAX_WIDTH,
    width: '90%',
    backgroundColor: Colors.extraLightGrey,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: Spaces.normal,
    paddingVertical: Spaces.small,
    borderTopColor: Colors.middleGrey,
    borderTopWidth: 4
  },
  descriptionText: {
    color: Colors.middleGrey,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  }
});

export default AbsenceCard;
