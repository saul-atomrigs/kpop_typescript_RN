import {Pressable, NativeModules, Text, View, Button} from 'react-native';
import React from 'react';
// import {onGoogleButtonPress, signOut} from '../../../utils/auth';

export default function Me() {
  const {CalendarModule} = NativeModules;

  const NewModuleButton = () => {
    const onPress = () => {
      CalendarModule.createCalendarEvent('testName', 'testLocation');
      // AlertModule.alert('Hello Module!');
      // console.log(AlertModule.NUMBER_VALUE);
      // console.log('We will invoke the native module here!');
    };

    return <Button title="Click to invoke your native module!" color="#841584" onPress={onPress} />;
  };

  // const {DEFAULT_EVENT_NAME} = CalendarModule.getConstants();
  // console.log(DEFAULT_EVENT_NAME);

  return (
    <View>
      {/* <Pressable onPress={onGoogleButtonPress}>
        <Text>Google login</Text>
      </Pressable> */}
      <NewModuleButton />
      {/* <Pressable onPress={signOut}>
        <Text>Google log out</Text>
      </Pressable> */}
    </View>
  );
}
