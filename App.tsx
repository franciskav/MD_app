import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Platform, StyleSheet, UIManager, View, Image } from 'react-native';
import { configureStore } from './config/storeconfig';
import { Screens } from './src/constants/screens';
import LoginScreen from './src/screens/loginSreen';
import { Provider } from 'react-redux';
import SignupScreen from './src/screens/signupScreen';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  Lato_400Regular_Italic,
  Lato_700Bold_Italic,
  Lato_900Black_Italic
} from '@expo-google-fonts/lato';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fonts, FontSizes } from './src/constants/fonts';
import { Colors } from './src/constants/colors';
import HomeScreen from './src/screens/homeScreen';
import TimetableScreen from './src/screens/timetableScreen';
import AbsenceScreen from './src/screens/absenceScreen';
import ApplyScreen from './src/screens/applyScreen';
import ProfilScreen from './src/screens/profilScreen';
import { Icons } from './src/constants/icons';
import ContactScreen from './src/screens/contactScreen';
import EditScreen from './src/screens/editScreen';
import NewsDetailsScreen from './src/screens/newsDetailsScreen';
import { configureFirebase } from './config/firebaseconfig';
import firebase from 'firebase';
import DataScreen from './src/screens/dataScreen';

const RootStack = createStackNavigator();
const LoginStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

function RootStackScreen() {
  return (
    <RootStack.Navigator mode={'modal'} screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={'LoginStack'} component={LoginStackScreen} />
      <RootStack.Screen
        name={Screens.NewsDetails}
        component={NewsDetailsScreen}
      />
      <RootStack.Screen name={Screens.Edit} component={EditScreen} />
      <RootStack.Screen name={Screens.Contact} component={ContactScreen} />
    </RootStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name={Screens.Login} component={LoginScreen} />
      <LoginStack.Screen name={Screens.SignUp} component={SignupScreen} />
      <LoginStack.Screen name={Screens.Data} component={DataScreen} />
      <LoginStack.Screen name={Screens.Home} component={TabStackScreen} />
    </LoginStack.Navigator>
  );
}

function TabStackScreen() {
  return (
    <TabStack.Navigator
      initialRouteName={Screens.Home}
      tabBarOptions={{
        labelStyle: styles.tabText,
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.lightGrey,
        style: styles.tabBackground,
        keyboardHidesTabBar: true
      }}
    >
      <TabStack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Kezdőlap',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.home_icon} style={{ tintColor: color }} />
          )
        }}
      />
      <TabStack.Screen
        name={Screens.Timetable}
        component={TimetableScreen}
        options={{
          tabBarLabel: 'Órarend',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.timetable_icon} style={{ tintColor: color }} />
          )
        }}
      />
      <TabStack.Screen
        name={Screens.Apply}
        component={ApplyScreen}
        options={{
          tabBarLabel: 'Jelentkezés',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.apply_icon} style={{ tintColor: color }} />
          )
        }}
      />
      <TabStack.Screen
        name={Screens.Absence}
        component={AbsenceScreen}
        options={{
          tabBarLabel: 'Hiányzás',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.absence_icon} style={{ tintColor: color }} />
          )
        }}
      />
      <TabStack.Screen
        name={Screens.Profil}
        component={ProfilScreen}
        options={{
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => (
            <Image source={Icons.profil_icon} style={{ tintColor: color }} />
          )
        }}
      />
    </TabStack.Navigator>
  );
}

const App = () => {
  const store = configureStore();

  configureFirebase();

  var database = firebase.database();
  var storage = firebase.storage();

  let [fonstLoaded] = useFonts({
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic
  });

  useEffect(() => {
    if (Platform.OS === 'android')
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }, []);

  if (!fonstLoaded) {
    return <View />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  tabText: {
    fontFamily: Fonts.Lato_regular,
    fontSize: FontSizes.extraSmall
  },
  tabBackground: {
    backgroundColor: Colors.darkGrey
  }
});

export default App;
