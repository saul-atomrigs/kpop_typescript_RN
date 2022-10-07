import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function _TextInput() {
  return <TextInput style={styles.textInput} />;
}

const styles = StyleSheet.create({
  textInput: {
    width: '100%',
    height: 50,
    // backgroundColor: 'ivory',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
});
