import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import PagesTemplate from '../components/pages/pagesTemplate';
import { Colors } from '../constants/colors';
import { Fonts, FontSizes } from '../constants/fonts';
import { Margins } from '../constants/margins';
import { Spaces } from '../constants/spaces';

interface TermsScreenProps {
  navigation: StackNavigationProp<any>;
}

const NewsDetailsScreen = ({ navigation }: TermsScreenProps) => {
  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <View style={styles.container}>
      <PagesTemplate title={''} canGoBack={true} onPress={onBackPress}>
        <ScrollView contentContainerStyle={styles.scrollview}>
          <Image
            source={require('../../assets/open_fri.jpg')}
            style={styles.image}
          />
          <View style={styles.line} />
          <Text
            style={[styles.titleText, Margins.mtSmall, Margins.mbExtraLarge]}
          >
            {'Új kezdő koreográfia csoport indul szeptembertől'}
          </Text>
          <Text style={styles.descriptionText}>
            {
              'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet. The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold deny. Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described acuteness propriety moonlight. Received overcame oh sensible so at an. Formed do change merely to county it. Am separate contempt domestic to to oh. On relation my so addition branched. Put hearing cottage she norland letters equally prepare too. Replied exposed savings he no viewing as up. Soon body add him hill. No father living really people estate if. Mistake do produce beloved demesne if am pursuit. Am no an listening depending up believing. Enough around remove to barton agreed regret in or it. Advantage mr estimable be commanded provision. Year well shot deny shew come now had. Shall downs stand marry taken his for out. Do related mr account brandon an up. Wrong for never ready ham these witty him. Our compass see age uncivil matters weather forbade her minutes. Ready how but truth son new under. No opinions answered oh felicity is resolved hastened. Produced it friendly my if opinions humoured. Enjoy is wrong folly no taken. It sufficient instrument insipidity simplicity at interested. Law pleasure attended differed mrs fat and formerly. Merely thrown garret her law danger him son better excuse. Effect extent narrow in up chatty. Small are his chief offer happy had. Man request adapted spirits set pressed. Up to denoting subjects sensible feelings it indulged directly. We dwelling elegance do shutters appetite yourself diverted. Our next drew much you with rank. Tore many held age hold rose than our. She literature sentiments any contrasted. Set aware joy sense young now tears china shy. Both rest of know draw fond post as. It agreement defective to excellent. Feebly do engage of narrow. Extensive repulsive belonging depending if promotion be zealously as. Preference inquietude ask now are dispatched led appearance. Small meant in so doubt hopes. Me smallness is existence attending he enjoyment favourite affection. Delivered is to ye belonging enjoyment preferred. Astonished and acceptance men two discretion. Law education recommend did objection how old. In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing sex. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result. Admitted add peculiar get joy doubtful. At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable. Needed its design number winter see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up. '
            }
          </Text>
          <View style={[styles.line, Margins.mbBig]} />
        </ScrollView>
      </PagesTemplate>
    </View>
  );
};

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    alignItems: 'center'
  },
  image: {
    width: WIDTH,
    height: WIDTH * 0.57
  },
  line: {
    backgroundColor: Colors.yellow,
    width: '80%',
    maxWidth: 450,
    height: Spaces.small,
    marginVertical: Spaces.small
  },
  titleText: {
    width: '80%',
    maxWidth: 450,
    fontFamily: Fonts.Lato_bold,
    fontSize: FontSizes.large,
    textAlign: 'center'
  },
  descriptionText: {
    width: '90%',
    maxWidth: 550,
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.normal
  }
});

export default NewsDetailsScreen;
