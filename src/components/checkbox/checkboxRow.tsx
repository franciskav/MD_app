import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Colors } from '../../constants/colors';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Spaces } from '../../constants/spaces';

interface Props {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  onPress: () => void;
}

const CheckboxRow = ({ title, titleStyle, style, checked, onPress }: Props) => {
  return (
    <View style={[styles.row, style]}>
      <CheckBox
        checked={checked}
        onPress={onPress}
        uncheckedColor={Colors.lightGrey}
        checkedColor={Colors.yellow}
        size={30}
      />
      <Text style={[styles.titleText, titleStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    paddingHorizontal: Spaces.large
  },
  titleText: {
    color: Colors.white,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.small,
    flexGrow: 1
  }
});

export default CheckboxRow;
