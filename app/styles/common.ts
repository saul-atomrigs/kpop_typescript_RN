import {StyleSheet, Dimensions} from 'react-native';
import styled from '@emotion/native';

/**
 * DESIGN TOKENS:
 */
export const COLORS = {
  background: {
    50: '#ffffff', // white
    100: '#fffafa', // snow
    200: '#fffff0', // ivory
    300: '#fffaf0', // floralwhite
    400: '#dcdcdc', // gainsboro
    500: '#d3d3d3', // lightgray
  },
  text: {
    50: '#808080', // gray
    100: '#708090', // slategray
    200: '#000000', // black
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
    50: '#fa8072', // salmon
    100: '#ff6347', // tomato
  },
};
export const SPACING = {
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
  background-color: ${COLORS.background[400]};
  padding: 20px;
`;

export const ScrollView = styled.ScrollView`
  background-color: ${COLORS.background[400]};
  padding: 20px;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.background[200]};
  margin: 20px;
`;

export const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.background[50]};
  padding: 10px;
  border-radius: 10px;
  margin-vertical: 5px;
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
  color: ${COLORS.text[200]};
`;

export const RegularText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: ${COLORS.text[200]};
`;

export const RegularGrayText = styled(RegularText)`
  color: ${COLORS.text[100]};
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
    backgroundColor: COLORS.background[200],
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  bigModalView: {
    flex: 1,
    marginTop: 50,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    backgroundColor: COLORS.background[400],
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
