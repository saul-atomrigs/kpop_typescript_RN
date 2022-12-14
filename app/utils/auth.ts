// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

// export const signOut = () => {
//   auth()
//     .signOut()
//     .then(() => console.log('User signed out!'));
// };

// export const signInWithEmailAndPassword = (email: string, password: string) => {
//   auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then(() => {
//       console.log('User account created & signed in!');
//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }

//       console.error(error);
//     });
// };

// export const onGoogleButtonPress = async () => {
//   // Check if your device supports Google Play
//   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//   // Get the users ID token
//   const {idToken} = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// };
