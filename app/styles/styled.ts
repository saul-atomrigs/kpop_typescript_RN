import styled from '@emotion/native';
import {COLORS, HEIGHT, DIMENSION, WIDTH, FONTS} from './common';

/**
 * VIEW & CONTAINERS:
 */
export const App = styled.View`
  background-color: ${COLORS.background[400]};
  padding-horizontal: ${DIMENSION.$medium};
  padding-vertical: ${DIMENSION.$small};
`;

export const ScrollView = styled.ScrollView`
  background-color: ${COLORS.background[400]};
  padding: ${DIMENSION.$medium};
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.background[400]};
  padding-vertical: ${DIMENSION.$small};
  padding-horizontal: ${DIMENSION.$medium};
`;

export const FullScreenModalContainer = styled.SafeAreaView`
  flex: 1;
  padding-vertical: ${DIMENSION.$medium};
  background-color: ${COLORS.background[100]};
`;

export const HStack = styled.Pressable`
  display: flex;
  flex-direction: row;
  background-color: ${COLORS.background[50]};
  border-radius: ${DIMENSION.$small};
  padding: ${DIMENSION.$small};
  margin-vertical: ${DIMENSION.$mini};
`;

export const VStack = styled(HStack)`
  flex-direction: column;
`;

/**
 * BUTTONS:
 */
export const BlackButtonContainer = styled.View`
 display: flex;
 justify-content: center;
 align-items: center;
 background-color: ${COLORS.background[1000]},
 width: 100%;
 height: ${HEIGHT * 0.07};
 border-radius: ${DIMENSION.$mini};
`;

/**
 * TEXT STYLES:
 */
export const BoldText = styled.Text`
  font-size: ${FONTS.size.$small};
  font-weight: bold;
  color: ${COLORS.text[200]};
`;

export const RegularText = styled.Text`
  font-size: ${FONTS.size.$small};
  font-weight: ${FONTS.weight.$regular};
  color: ${COLORS.text[200]};
`;

export const RegularGrayText = styled(RegularText)`
  color: ${COLORS.text[100]};
`;

export const ThinText = styled.Text`
  font-size: ${FONTS.size.$small};
  font-weight: ${FONTS.weight.$bold};
`;
