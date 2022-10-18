import {StyleSheet, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import config from '../../../../backend/aws-exports';
import {listEvents} from '../../../../backend/graphql/queries';

export default function Community() {
  return (
    <Pressable>
      <Text>Community</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
