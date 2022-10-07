import {StyleSheet, Dimensions} from 'react-native';

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

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const commonStyles = StyleSheet.create({
  /**
   * VIEW
   */
  app: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: COLORS.snow,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  /**
   * HEADER
   */
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    height: 30,
    width: WIDTH,
  },
  closeIcon: {
    height: 20,
    width: 20,
  },
});
