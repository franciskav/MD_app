import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

const ContactScreen = () => {
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Kapcsolat'} canGoBack={false}>
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

export default ContactScreen;
