import React from 'react';
import { Colors } from '../../constants/colors';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Spaces } from '../../constants/spaces';
import { Margins } from '../../constants/margins';

interface Props {
  onPress: (id: string) => void;
  id: string;
  style?: StyleProp<ViewStyle>;
  date: string;
  title: string;
  image: string;
  disabled?: boolean;
}

const NewsCard = ({
  onPress,
  id,
  style,
  date,
  title,
  image,
  disabled
}: Props) => {
  const onPressed = () => {
    if (onPress) {
      onPress(id);
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressed}
      style={[styles.buttonContainer, style]}
      disabled={disabled}
    >
      <View style={[styles.leftTop, styles.shadow]}></View>
      <View style={[styles.rightBottom, styles.shadow]}></View>
      <View style={[styles.contentContainer, styles.shadow]}>
        <Image
          style={[styles.image, Margins.mbNormal]}
          source={{ uri: image }}
        />
        <View style={styles.timeBorder}>
          <Text style={[styles.timeText]}>{date}</Text>
        </View>
        <Text style={[styles.titleText, Margins.mtNormal]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

//méret kiszámítása
const WINDOW_WIDTH =
  Dimensions.get('window').width > 550
    ? 550 * 0.9
    : Dimensions.get('window').width * 0.9;
const POSITION = WINDOW_WIDTH * 0.03;
const IMAGE_WIDTH = WINDOW_WIDTH - 2 * POSITION;
const RATIO = 0.57;

const styles = StyleSheet.create({
  buttonContainer: {
    width: WINDOW_WIDTH,
    marginVertical: POSITION
  },
  shadow: {
    shadowColor: Colors.middleGrey,
    shadowOpacity: 1,
    shadowRadius: 1,
    shadowOffset: { height: 2, width: 2 },
    elevation: 4
  },
  timeBorder: {
    borderLeftColor: Colors.middleGrey,
    borderLeftWidth: 3,
    paddingLeft: Spaces.normal,
    justifyContent: 'center'
  },
  timeText: {
    color: Colors.yellow,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal
  },
  titleText: {
    color: Colors.darkGrey,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.medium
  },
  leftTop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: -POSITION,
    top: -POSITION,
    backgroundColor: Colors.middleGrey
  },
  rightBottom: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    right: -POSITION,
    bottom: -POSITION,
    backgroundColor: Colors.yellow
  },
  contentContainer: {
    backgroundColor: Colors.extraLightGrey,
    padding: POSITION
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * RATIO,
    resizeMode: 'cover',
    alignSelf: 'center'
  }
});

export default NewsCard;
