import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import styled from '@emotion/native';

import {App, ScrollView, VerticalContainer as FeedContainer, BoldText, RegularGrayText} from '../../../styles/common';

import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../../../backend/graphql/queries';
import {textReducer} from '../../../utils/functions';
import {IdentificationBadge} from 'phosphor-react-native';

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
    return textReducer(title, 80, true);
  };

  const createdAtReduced = createdAt => {
    return textReducer(createdAt, 10, false);
  };

  const orderInDate = (a, b) => new Date(b.createdAt) - new Date(a.createdAt);

  /**
   * COMPONENTS:
   */
  const Feed = ({post, title, createdAt, likesCount, id}) => (
    <FeedContainer
      onPress={() => {
        navigation.navigate('FeedPage', {
          param: post,
        });
      }}>
      <BoldText>{titleReduced(title)}</BoldText>
      <Footer>
        <RegularGrayText>{createdAtReduced(createdAt)}</RegularGrayText>
        <RegularGrayText>{likesCount} likes</RegularGrayText>
      </Footer>
    </FeedContainer>
  );

  return (
    <App>
      <FlatList
        data={posts.sort(orderInDate)}
        renderItem={({item}) => <Feed post={item} title={item.title} createdAt={item.createdAt} likesCount={item.likesCount} id={item.id} />}
        initialNumToRender={8}
        maxToRenderPerBatch={8}
        showsVerticalScrollIndicator={false}
      />
    </App>
  );
}

const styles = StyleSheet.create({});

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
`;
