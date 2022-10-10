import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {commonStyles} from '../../styles/common';
import _WheelPicker from '../Base/_WheelPicker';

export default function RegularWheelPicker({title, selectedValue, onValueChange}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={commonStyles.bold}> {title} </Text>
      </View>
      <_WheelPicker selectedValue={selectedValue} onValueChange={onValueChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginHorizontal: 5,
  },
});
