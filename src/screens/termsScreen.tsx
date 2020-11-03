import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

interface TermsScreenProps {
  navigation: StackNavigationProp<any>;
}

const TermsScreen = ({ navigation }: TermsScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <PagesTemplate
        title={'Adatkezelési tájékoztató'}
        canGoBack={true}
        onPress={onBackPress}
      >
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

export default TermsScreen;
