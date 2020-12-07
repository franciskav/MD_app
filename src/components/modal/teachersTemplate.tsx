import React, { Component } from 'react';
import { StyleSheet, View, Modal, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../constants/colors';
import { Fonts, FontSizes } from '../../constants/fonts';
import { Margins } from '../../constants/margins';
import { Spaces } from '../../constants/spaces';

interface Props {
  onPress: (show: boolean) => void;
  show: boolean;
  title?: string;
  description?: string;
}

const TeachersTemplate = ({ onPress, show, title, description }: Props) => {
  const onPressed = () => {
    //console.log('press');
    if (onPress) {
      onPress(show);
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
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            onPress={onPressed}
          >
            <Text style={[styles.titleText, Margins.mbExtraLarge]}>
              {'Tillinger Alex'}
            </Text>
            <Text style={styles.text}>
              {
                'Alex a magyar táncos világ egyik legkiemelkedőbb fiatal tehetsége. Számtalanszor ért el dobogós helyezést versenyeken. Csapat szinten, és egyéniben egyaránt. Nem utolsó sorban Alex egyike azon kevés táncosoknak, akik magas szinten tudnak freestylet és koreográfiát is előadni. Tánciskolánkban ő rendelkezik a legmélyebb tudással az oldschool-hip-hop alapjai terén. Fontos számára, hogy megtanítsa diákjainak a hip-hopot a legmélyebb gyökereitől.\n\nReferencia:\nHuawei Flashmob Show\nOrfeum Hollywood show\nStrand Festival Grand Opening show\nNagy Duett 2017-2018\nCsak Show és más semmi 2018\nPassió XXI 2017\nRossmann 25. birthday show 2018\n\nTáncban elért eredmények:\nHip Hop International small group 2nd place\nHip Hop International megacrew 1st place\nRed Bull hip-hop dance battle 1st place\nFusion dance contest small group 1st place\nFusion dance contest duo 2nd place\nFusion dance contest solo 4th place\nWorld of dance Eindhoven 9th place'
              }
            </Text>
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
