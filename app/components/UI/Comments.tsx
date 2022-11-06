import React from 'react';
import {RegularText, VStack} from '../../styles/styled';

type TComments = {
  content: string | ReactNode;
};

export default function Comments({content}: TComments) {
  return (
    <VStack>
      <RegularText>{content}</RegularText>
    </VStack>
  );
}
