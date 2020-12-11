import React from 'react';
import { StyleSheet, View, Modal, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Colors } from '../../constants/colors';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Margins } from '../../constants/margins';
import { Spaces } from '../../constants/spaces';

interface Props {
  onPress: (name: string) => void;
  title?: string;
  description?: string;
}

const TeachersTemplate = ({ onPress, title, description }: Props) => {
  const onPressed = () => {
    if (onPress) {
      onPress('');
    }
  };
  return (
    <Modal transparent={true} animationType={'none'}>
      <View style={styles.modalBackground}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onPress={onPressed}
          >
            <Text style={[styles.titleText, Margins.mbExtraLarge]}>
              {title}
            </Text>
            <Text style={styles.text}>{description}</Text>
          </TouchableOpacity>
        </ScrollView>
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
  container: {
    backgroundColor: Colors.white,
    maxHeight: '75%',
    width: '90%',
    borderRadius: 10,
    display: 'flex',
    padding: Spaces.medium
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 40
  },
  titleText: {
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.medium
  },
  text: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  }
});

export default TeachersTemplate;
