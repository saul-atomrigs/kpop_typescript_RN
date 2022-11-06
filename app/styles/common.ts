import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

/**
 * DESIGN TOKENS:
 */
export const COLORS = {
  background: {
    50: '#ffffff',
    100: '#fffafa',
    200: '#fffff0',
    300: '#fffaf0',
    400: '#dcdcdc',
    500: '#d3d3d3',
    1000: '#000000',
  },
  text: {
    50: '#808080',
    100: '#708090',
    200: '#000000',
  },
  primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  error: {
    50: '#fa8072',
    100: '#ff6347',
    $red800: '#E81300',
  },
  $yellow50: '#FFF7E6',
  $yellow500: '#FFC552',
  $yellow800: '#CE6400',
  success: {
    50: '#E8FAF6',
    500: '#00B493',
    800: '#008C72',
  },
};
export const DIMENSION = {
  $mini: '5px',
  $small: '10px',
  $medium: '20px',
  $large: '30px',
};

export const FONTS = {
  size: {
    $small: '12px',
    $medium: '16px',
    $large: '20px',
  },
  weight: {
    $thin: '300',
    $regular: '500',
    $bold: '800',
  },
};

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const physicalWidth = PixelRatio.getPixelSizeForLayoutSize(WIDTH);
export const physicalHeight = PixelRatio.getPixelSizeForLayoutSize(HEIGHT);

export const commonStyles = StyleSheet.create({
  /**
   * VIEW
   */
  app: {
    flex: 1,
    backgroundColor: COLORS.background[200],
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bigModalView: {
    flex: 1,
    marginTop: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.background[300],
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
    color: COLORS.background[200],
    fontWeight: '800',
    letterDIMENSION: 2,
  },

  /**
   * BUTTONS:
   */
  blackButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background[1000],
    borderRadius: 25,
    width: '100%',
    height: HEIGHT * 0.07,
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
