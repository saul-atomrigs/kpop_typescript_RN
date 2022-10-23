import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styled from '@emotion/native';

import {App, ScrollView, VerticalContainer as FeedContainer, BoldText, RegularText} from '../../../styles/common';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../../../backend/graphql/queries';
import {textReducer} from '../../../utils/functions';

export default function Community({navigation}) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postData.data.listPosts.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const titleReduced = title => {
    return textReducer(title, 80, dots);
  };

  const createdAtReduced = createdAt => {
    return textReducer(createdAt, 10, dots === false);
  };

  const orderInDate = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  /**
   * COMPONENTS:
   */
  const Feed = ({title, createdAt}) => (
    <FeedContainer onPress={() => {}}>
      <BoldText>{titleReduced(title)}</BoldText>
      <Footer>
        <RegularText>{createdAtReduced(createdAt)}</RegularText>
      </Footer>
    </FeedContainer>
  );

  return (
    <App>
      <FlatList data={posts.sort(orderInDate)} renderItem={({item}) => <Feed title={item.title} createdAt={item.createdAt} />} />
    </App>
  );
}

const styles = StyleSheet.create({});

const Footer = styled.View`
  padding-top: 10px;
`;
