import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigation, useRoute, useIsFocused} from '@react-navigation/native';

import {App, SafeAreaView, VerticalContainer, BoldText, RegularText} from '../../../styles/common';

import {API, graphqlOperation} from 'aws-amplify';
import {listComments, getUser} from '../../../../backend/graphql/queries';
import {createComment, updatePost} from '../../../../backend/graphql/mutations';

export default function FeedPage() {
  const {param} = useRoute().params;

  const [comments, setComments] = useState([]);

  //   async function fetchComments() {
  //     try {
  //       const commentData = await API.graphql(graphqlOperation(listComments, {filter: {postCommentsId: {eq: param.id}}}));
  //       setComments(commentData.data.listComments.items);
  //     } catch (err) {
  //       console.log(err, 'fetching 에러!!!');
  //     }
  //   }

  //   const isFocused = useIsFocused();
  //   useEffect(() => {
  //     fetchComments();
  //   }, [isFocused]);

  return (
    <SafeAreaView>
      <VerticalContainer>
        <RegularText>{param.title}</RegularText>
        {/* <RegularText>{comments}</RegularText> */}
      </VerticalContainer>
    </SafeAreaView>
  );
}
