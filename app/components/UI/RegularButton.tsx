import React from 'react';
import {COLORS} from '../../styles/common';
import {BlackButton} from '../../styles/styled';
import _Button from '../Base/_Button';

type TRegularButton = {
  text: string;
  onPress: () => void;
};

export default function RegularButton({text, onPress}: TRegularButton) {
  const buttonText = {
    color: COLORS.background[200],
    fontWeight: '800',
    letterDIMENSION: 2,
  };

  return (
    <BlackButton>
      <_Button textStyle={buttonText} text={text} onPress={onPress} />
    </BlackButton>
  );
}
