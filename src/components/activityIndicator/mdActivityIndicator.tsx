import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import { Colors } from '../../constants/colors';

const MDActivityIndicator = () => {
  return (
    <Modal transparent={true} animationType={'none'}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator color={Colors.yellow} size={'large'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.transparentGrey
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.white,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default MDActivityIndicator;
