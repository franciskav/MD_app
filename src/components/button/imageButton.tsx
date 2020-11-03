import React from 'react';
import { Colors } from '../../constants/colors';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Image,
  ImageSourcePropType
} from 'react-native';
import { Spaces } from '../../constants/spaces';

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  icon: ImageSourcePropType;
  disabled?: boolean;
}

const ImageButton = ({ onPress, style, icon, disabled }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
    >
      <Image source={icon} />
    </TouchableOpacity>
  );
};

const SIZE = 55;

const styles = StyleSheet.create({
  buttonContainer: {
    height: SIZE,
    width: SIZE,
    backgroundColor: Colors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spaces.normal,
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { height: 1, width: 1 },
    elevation: 2
  }
});

export default ImageButton;
