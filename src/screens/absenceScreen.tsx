import React from 'react';
import { View, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

const AbsenceScreen = () => {
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Hiányzás'} canGoBack={false}>
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

export default AbsenceScreen;
