import React from 'react';
import {StyleSheet, Text, ScrollView, Pressable, View, Image} from 'react-native';

import {COLORS, commonStyles, WIDTH, HEIGHT} from '../../../styles/common';
import RegularTextInput from '../../UI/RegularTextInput';

export default function AddSchedule({openAddScheduleModal, setOpenAddScheduleModal}) {
  return (
    <ScrollView style={commonStyles.bigModalView} keyboardShouldPersistTaps="handled">
      <View style={commonStyles.headerContainer}>
        <Pressable
          onPress={() => {
            setOpenAddScheduleModal(!openAddScheduleModal);
          }}>
          <Image style={commonStyles.closeIcon} source={require('../../../../app/assets/close.png')} />
        </Pressable>
      </View>

      <View style={commonStyles.bodyContainer}>
        <View style={commonStyles.textInputContainer}>
          <RegularTextInput title={'Artist'} />
        </View>
        <View style={commonStyles.textInputContainer}>
          <RegularTextInput title={'Date'} />
        </View>
        <View style={commonStyles.textInputContainer}>
          <RegularTextInput title={'Event'} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
