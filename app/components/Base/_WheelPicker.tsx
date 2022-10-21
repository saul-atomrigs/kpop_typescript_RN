import {Picker} from '@react-native-picker/picker';
import React from 'react';

interface PropTypes {
  selectedValue: string;
  onValueChange: () => void;
}

const artists = [
  '',
  'NewJeans',
  'aespa',
  'Apink',
  'ASTRO',
  'ATEEZ',
  'BLACKPINK',
  'BTS',
  'Cherry Bullet',
  'STAYC',
  'Twice',
  'EXO',
  'NCT 127',
  'NMIXX',
  'Stray Kids',
  'ITZY',
  'TXT',
  'Kep1er',
  'IVE',
  'VIVIZ',
].sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
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
