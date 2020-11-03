import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PagesTemplate from '../components/pages/pagesTemplate';

interface EditScreenProps {
  navigation: StackNavigationProp<any>;
}

const EditScreen = ({ navigation }: EditScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <PagesTemplate
        title={'Adatok szerkesztése'}
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

export default EditScreen;
