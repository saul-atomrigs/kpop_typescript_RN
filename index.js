/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Amplify} from 'aws-amplify';
import awsconfig from './backend/aws-exports';
Amplify.configure(awsconfig);

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import firebase from '@react-native-firebase/app';

const RNfirebaseConfig = {
  apiKey: 'AIzaSyCz-Wd5fT_9DNmaJp_mGBYu9NjRSgBLk3U',
  authDomain: 'note-app-rn.firebaseapp.com',
  projectId: 'note-app-rn',
  storageBucket: 'note-app-rn.appspot.com',
  // messagingSenderId: ".....",
  appId: '1:634344250588:web:6922ef76271f0f4a58e819',
};

// if (firebase.apps.length === 0) {
// app = firebase.initializeApp(RNfirebaseConfig);
firebase.initializeApp(RNfirebaseConfig);
// }

export const auth = firebase.auth();

GoogleSignin.configure({
  // webClientId: '410819928050-r0q6jqltshqv8ji8hh6m6lmejfd3nmot.apps.googleusercontent.com',
  webClientId: '634344250588-lgu10halk6fqqu366rdnommu47pekmc4.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
