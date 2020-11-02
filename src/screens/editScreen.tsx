import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

const EditScreen = () => {
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Adatok szerkesztése'} canGoBack={false}>
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

export default EditScreen;
