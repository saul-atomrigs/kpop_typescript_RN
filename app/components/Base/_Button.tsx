import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';

export default function _Button({onPress, textStyle, text}) {
  return (
    <Pressable onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
