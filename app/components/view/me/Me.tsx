import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {onGoogleButtonPress, signOut} from '../../../utils/auth';

export default function Me() {
  return (
    <View>
      <Pressable onPress={onGoogleButtonPress}>
        <Text>Google login</Text>
      </Pressable>
      <Pressable onPress={signOut}>
        <Text>Google log out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
