import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {artists} from '../../utils/artists';

interface PropTypes {
  selectedValue: string;
  onValueChange: () => void;
}

export default function _WheelPicker({selectedValue, onValueChange}: PropTypes) {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange}>
      {artists.map((artist, idx) => {
        return <Picker.Item key={idx} label={artist} value={artist} />;
      })}
      {/* <Picker.Item label="Blackpink" value="Blackpink" /> */}
    </Picker>
  );
}
