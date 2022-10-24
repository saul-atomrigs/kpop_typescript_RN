import React, {useState, useEffect, useLayoutEffect} from 'react';
import {FlatList, View} from 'react-native';
import styled from '@emotion/native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {TWITTER_BEARER_TOKEN} from '@env';

import {App, Container as TwitterContainer, COLORS} from '../../../styles/common';
import {artists, artistMetaData} from '../../../utils/artists';
import {textReducer} from '../../../utils/functions';

import {API, graphqlOperation} from 'aws-amplify';
import {listEvents} from '../../../../backend/graphql/queries';

export default function Discover({navigation}) {
  // const {artist} = useRoute().params;

  const [items, setItems] = useState([]);
  const [twitterData, setTwitterData] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [twitterText, setTwitterText] = useState('');

  // const twitterID = artistMetaData.NMIXX.twitterID;
  // const twitterIDurl = artistMetaData.Kep1er.twitterIDurl;
  // const endpoint = `https://api.twitter.com/2/users/${twitterID}/tweets?max_results=5&expansions=attachments.media_keys&media.fields=url`;

  /**
   * HANDLERS:
   */
  // const getTwitter = async () => {
  //   try {
  //     const response = await fetch(endpoint, {
  //       headers: {
  //         'User-Agent': 'v2TweetLookupJS',
  //         Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAACoaZgEAAAAAqV6HLPIN2eRnCmsAKZ9vHr48bdA%3DOTa7OsRxhtMRBohvvAjDLEtG8NNou7oKANfXctQNzs0bfPjCpW',
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     const json = await response.json();
  //     setTwitterData(json);
  //     return json;
  //   } catch (error) {
  //     console.log('에러:', error);
  //   }
  // };

  // const twitterImageUrl = async artist => {
  //   try {
  //     const url = await twitterData?.includes?.media[0].url;
  //     setImageUrl(url);
  //     // console.log('imageUrl', imageUrl);
  //     return url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getTwitterText = async artist => {
  //   try {
  //     const text = await twitterData?.data[0].text;
  //     const textReduced = textReducer(text, 20, true);
  //     setTwitterText(textReduced);
  //     return textReduced;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  // getTwitter();
  // twitterImageUrl();
  // getTwitterText();
  // }, []);
  // console.log(twitterData?.includes?.media[1].url);

  /**
   * COMPONENTS:
   *
   * @param artist Each Kpop artist
   * @returns Twitter Feed component
   */
  const TwitterFeed = ({artist}) => {
    const twitterID = artistMetaData[artist].twitterID;
    const twitterIDurl = artistMetaData[artist].twitterIDurl;
    const endpoint = `https://api.twitter.com/2/users/${twitterID}/tweets?max_results=5&expansions=attachments.media_keys&media.fields=url`;

    return (
      <TwitterContainer
        onPress={() => {
          navigation.navigate('Twitter', {
            param: twitterIDurl,
          });
        }}>
        {/* <TwitterImage
          source={
            twitterData?.includes?.media && {
              uri: imageUrl,
              height: 100,
              width: 100,
            }
          }
        /> */}
        <TwitterTextsContainer>
          <ArtistName>{artist}</ArtistName>
          {/* <TwitterText>{twitterData?.data[0].text}</TwitterText> */}
        </TwitterTextsContainer>
      </TwitterContainer>
    );
  };

  return (
    <App>
      <FlatList data={artists} renderItem={({item}) => <TwitterFeed artist={item} />} />
    </App>
  );
}

const TwitterImage = styled.Image`
  border-radius: 10px;
`;

const TwitterTextsContainer = styled.View`
  display: flex;
  flex: 1
  flex-direction: column;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  justify-content: flex-start;
`;

const ArtistName = styled.Text`
  font-weight: 800;
`;

const TwitterText = styled.Text`
  display: flex;
  flex: 1
  flex-shrink: 1
`;
