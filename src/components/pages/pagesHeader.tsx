import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { Margins } from '../../constants/margins';
import { Colors } from '../../constants/colors';
import { Icons } from '../../constants/icons';
import { Fonts, FontSizes } from '../../constants/fonts';

interface Props {
  title: string;
  onPress?: () => void;
  canGoBack: boolean;
}

const PagesHeader = ({ title, onPress, canGoBack }: Props) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity style={Margins.mlBig} onPress={onPress}>
        <Image source={canGoBack ? Icons.back_arrow : Icons.logo_icon} />
      </TouchableOpacity>
      <Text style={[styles.headerText, Margins.mlLarge]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 56,
    width: '100%'
  },
  backButton: {
    height: 25,
    width: 25,
    backgroundColor: Colors.white
  },
  headerText: {
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal,
    color: Colors.white
  }
});

export default PagesHeader;
