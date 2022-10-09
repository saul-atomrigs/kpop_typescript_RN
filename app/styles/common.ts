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
  bigModalView: {
    // display: 'flex',
    flex: 1,
    // justifyContent: 'space-between',
    marginTop: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.gainsboro,
    border: '1px solid black',
  },

  /**
   * CONTAINERS:
   */
  bodyContainer: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  textInputContainer: {
    paddingVertical: 15,
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  /**
   * TEXTS:
   */
  bold: {
    fontWeight: 'bold',
  },
  buttonText: {
    color: COLORS.snow,
    fontWeight: '800',
    letterSpacing: 2,
  },

  /**
   * BUTTONS:
   */
  blackButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.black,
    width: '100%',
    height: HEIGHT * 0.07,
    borderRadius: 25,
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
