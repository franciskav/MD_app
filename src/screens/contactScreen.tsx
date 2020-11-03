import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

interface ContactScreenProps {
  navigation: StackNavigationProp<any>;
}

const ContactScreen = ({ navigation }: ContactScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <PagesTemplate title={'Kapcsolat'} canGoBack={true} onPress={onBackPress}>
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
