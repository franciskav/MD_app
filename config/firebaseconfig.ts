import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBdZbRSzyzo50zRuK4tC4NW0JCiPPbrjjE',
  authDomain: 'md-app-f8cb0.firebaseapp.com',
  databaseURL: 'https://md-app-f8cb0.firebaseio.com',
  projectId: 'md-app-f8cb0',
  storageBucket: 'md-app-f8cb0.appspot.com',
  messagingSenderId: '52904973734',
  appId: '1:52904973734:web:9ee9245f244a3f09fc2b67'
};

export function configureFirebase() {
  firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(firebaseConfig);
}
