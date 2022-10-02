import {StyleSheet} from 'react-native';

export const COLORS = {
  white: '#ffffff',
  snow: '#fffafa',
  ivory: '#fffff0',
  floralwhite: '#fffaf0',
  gainsboro: '#dcdcdc',
  lightgray: '#d3d3d3',
  gray: '#808080',
  slategray: '#708090',
  salmon: '#fa8072',
  tomato: '#ff6347',
  midnightblue: '#191970',
  black: '#000000',
};

export const STYLES = StyleSheet.create({
  app: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.snow,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
});
