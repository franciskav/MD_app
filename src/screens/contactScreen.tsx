import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Strings } from '../constants/localization';
import { Margins } from '../constants/margins';
import { Spaces } from '../constants/spaces';

interface ContactScreenProps {
  navigation: StackNavigationProp<any>;
}

const ContactScreen = ({ navigation }: ContactScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };

  return (
    <View style={styles.container}>
      <PagesTemplate
        title={Strings.contact}
        canGoBack={true}
        onPress={onBackPress}
      >
        <View style={styles.center}>
          {renderTextRow(Strings.email.title, Strings.email.data)}
          {renderTextRow(Strings.phone.title, Strings.phone.data)}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 47.4987495,
              longitude: 19.05725,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02
            }}
          >
            <Marker
              coordinate={{ latitude: 47.494312, longitude: 19.058813 }}
            />
            <Marker
              coordinate={{ latitude: 47.503187, longitude: 19.055687 }}
            />
          </MapView>

          {renderTextRow(Strings.arany.title, Strings.arany.data)}
          {renderTextRow(Strings.astoria.title, Strings.astoria.data)}
        </View>
      </PagesTemplate>
    </View>
  );
};

const renderTextRow = (title: string, content: string) => {
  return (
    <Text style={[styles.boldText, Margins.mbSmall, Margins.mtSmall]}>
      {title}{' '}
      <Text style={[styles.text, { fontFamily: Fonts.Lato_regular }]}>
        {content}
      </Text>
    </Text>
  );
};

const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spaces.large
  },
  boldText: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal,
    textAlign: 'center'
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.normal,
    textAlign: 'center'
  },
  map: {
    width: '100%',
    height: HEIGHT / 4
  }
});

export default ContactScreen;
