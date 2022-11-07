import React from 'react';
import {Pressable, Text} from 'react-native';
import {ButtonText} from '../../styles/styled';

type TButton = {
  onPress: () => void;
  textStyle: object | undefined;
  text: string;
};

export default function _Button({onPress, textStyle, text}: TButton) {
  return (
    <Pressable onPress={onPress}>
      {/* <Text style={textStyle}>{text}</Text> */}
      <ButtonText style={textStyle}>{text}</ButtonText>
    </Pressable>
  );
}
