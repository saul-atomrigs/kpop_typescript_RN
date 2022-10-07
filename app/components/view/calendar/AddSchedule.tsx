import React from 'react';
import {StyleSheet, Text, SafeAreaView, Pressable, View, Image} from 'react-native';

import {COLORS, commonStyles, WIDTH, HEIGHT} from '../../../styles/common';

export default function AddSchedule() {
  return (
    <SafeAreaView style={commonStyles.app}>
      <View style={commonStyles.headerContainer}>
        <Pressable onPress={() => {}}>
          <Image style={commonStyles.closeIcon} source={require('../../../../app/assets/close.png')} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
