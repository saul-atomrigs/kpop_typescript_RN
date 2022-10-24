import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

import {App, SafeAreaView, VerticalContainer, BoldText, RegularText} from '../../../styles/common';

import {API, graphqlOperation} from 'aws-amplify';
import {listComments, getUser} from '../../../../backend/graphql/queries';
import {createComment, updatePost} from '../../../../backend/graphql/mutations';
import styled from '@emotion/native';

export default function FeedPage() {
  const {param} = useRoute().params;

  const [comments, setComments] = useState([]);
  console.log(comments);

  async function fetchComments() {
    try {
      const commentData = await API.graphql(graphqlOperation(listComments, {filter: {postCommentsId: {eq: param.id}}}));
      setComments(commentData.data.listComments.items);
    } catch (err) {
      console.log(err);
    }
  }

  //   const isFocused = useIsFocused();
  useEffect(() => {
    fetchComments();
  }, []);

  /**
   * COMPONENTS
   */

  const Comments = ({content}) => (
    <VerticalContainer>
      <RegularText>{content}</RegularText>
    </VerticalContainer>
  );

  return (
    <SafeAreaView>
      <VerticalContainer>
        <BoldText>{param.title}</BoldText>
      </VerticalContainer>
      <CommentsContainer>
        <FlatList data={comments} renderItem={({item}) => <Comments content={item.content} />} />
      </CommentsContainer>
    </SafeAreaView>
  );
}

const CommentsContainer = styled.View`
  margin-left: 20px;
`;
