import React from 'react';
import {RegularText, VerticalContainer} from '../../styles/common';

type TComments = {
  content: string | ReactNode;
};

export default function Comments({content}: TComments) {
  return (
    <VerticalContainer>
      <RegularText>{content}</RegularText>
    </VerticalContainer>
  );
}
