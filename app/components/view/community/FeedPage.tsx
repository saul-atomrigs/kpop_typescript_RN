import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';
import styled from '@emotion/native';

import {App, SafeAreaView, VStack, BoldText} from '../../../styles/styled';
import Comments from '../../UI/Comments';

import {API, graphqlOperation} from 'aws-amplify';
import {listComments, getUser} from '../../../../backend/graphql/queries';
import {createComment, updatePost} from '../../../../backend/graphql/mutations';

export default function FeedPage() {
  const {param} = useRoute<any>().params;

  const [comments, setComments] = useState<any[]>([]);

  async function fetchComments() {
    try {
      const commentData = await API.graphql(
        graphqlOperation(listComments, {filter: {postCommentsId: {eq: param.id}}}),
      );
      setComments(commentData.data.listComments.items);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchComments();
  }, []);

  /**
   * COMPONENTS
   */

  return (
    <SafeAreaView>
      <VStack>
        <BoldText>{param.title}</BoldText>
      </VStack>
      <CommentsContainer>
        <FlatList data={comments} renderItem={({item}) => <Comments content={item.content} />} />
      </CommentsContainer>
    </SafeAreaView>
  );
}

const CommentsContainer = styled.View`
  margin-left: 20px;
`;
