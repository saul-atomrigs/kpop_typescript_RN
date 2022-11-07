import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import _Button from '../Base/_Button';
import {BlackButtonContainer} from '../../styles/styled';
import {commonStyles} from '../../styles/common';

export default function RegularButton({text, onPress}) {
  return (
    <View style={commonStyles.blackButton}>
      <_Button textStyle={commonStyles.buttonText} text={text} onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({});
