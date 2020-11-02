import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import PagesHeader from './pagesHeader';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

interface Props {
  title: string;
  children: React.ReactNode;
  onPress?: () => void;
  canGoBack: boolean;
}

const PagesTemplate = ({ title, children, onPress, canGoBack }: Props) => {
  return (
    <View style={styles.statusBar}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <PagesHeader title={title} onPress={onPress} canGoBack={canGoBack} />
        <View style={styles.backgroundView}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Colors.darkGrey,
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  backgroundView: {
    backgroundColor: Colors.extraLightGrey,
    flex: 1
  }
});

export default PagesTemplate;
