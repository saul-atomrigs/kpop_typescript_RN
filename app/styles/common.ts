import {StyleSheet, Dimensions} from 'react-native';
import styled from '@emotion/native';

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

/**
 * DESIGN TOKENS:
 */
export const colors = {
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
};
export const spacing = {
  px: 1,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
  32: 128,
  40: 160,
  48: 192,
  56: 224,
  64: 256,
  72: 288,
  80: 320,
  96: 384,
};

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

/**
 * VIEW & CONTAINERS:
 */
export const App = styled.View`
  background-color: ${COLORS.snow}
  padding: 20px
`;

export const ScrollView = styled.ScrollView`
  background-color: ${COLORS.snow}
  padding: 20px
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.snow}
  margin: 20px;
`;

export const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center
  background-color: ${COLORS.white};
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 5px
`;

export const VerticalContainer = styled(Container)`
  flex-direction: column;
`;

/**
 * TEXT STYLES:
 */
export const BoldText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: black;
`;

export const RegularText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.black};
`;

export const RegularGrayText = styled(RegularText)`
  color: ${COLORS.slategray};
`;

export const ThinText = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;

export const commonStyles = StyleSheet.create({
  /**
   * VIEW
   */
  app: {
    flex: 1,
    backgroundColor: COLORS.snow,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bigModalView: {
    flex: 1,
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
