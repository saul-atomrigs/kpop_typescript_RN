import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _TextInput from '../Base/_TextInput';
import {commonStyles} from '../../styles/common';

export default function RegularTextInput({title}) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={commonStyles.bold}> {title} </Text>
      </View>
      <View>
        <_TextInput />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 5,
  },
});
