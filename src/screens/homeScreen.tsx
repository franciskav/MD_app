import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Hírek és események'} canGoBack={false}>
        <View></View>
      </PagesTemplate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
