import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Colors } from '../../constants/colors';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Spaces } from '../../constants/spaces';

interface Props {
  title: string;
  style?: StyleProp<ViewStyle>;
  checked: boolean;
  onPress: () => void;
}

const CheckboxRow = ({ title, style, checked, onPress }: Props) => {
  return (
    <View style={[styles.row, style]}>
      <CheckBox
        checked={checked}
        onPress={onPress}
        uncheckedColor={Colors.lightGrey}
        checkedColor={Colors.yellow}
      />
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleText: {
    color: Colors.white,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.small,
    flexGrow: 1
  }
});

export default CheckboxRow;
