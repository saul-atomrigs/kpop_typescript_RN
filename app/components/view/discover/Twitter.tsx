import React from 'react';
import {WebView} from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import {SafeAreaView} from '../../../styles/styled';

export default function Twitter({navigation}) {
  const {param} = useRoute().params;

  const TWEETER_URL = 'https://twitter.com/search?q=' + param + `&src=typed_query`;

  return (
    <SafeAreaView>
      <WebView source={{uri: TWEETER_URL}} />
    </SafeAreaView>
  );
}
