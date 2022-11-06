import React, {useState, useEffect} from 'react';
import {StyleSheet, KeyboardAvoidingView, ScrollView, Pressable, View, Image, SafeAreaView, NativeModules, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {COLORS, commonStyles, WIDTH, HEIGHT} from '../../../styles/common';
import RegularButton from '../../UI/RegularButton';
import RegularTextInput from '../../UI/RegularTextInput';
import RegularWheelPicker from '../../UI/RegularWheelPicker';
import {FullScreenModalContainer} from '../../../styles/styled';

const initialValues = {
  artist: '',
  date: '',
  event: '',
};

export default function AddSchedule({openAddScheduleModal, setOpenAddScheduleModal}) {
  const {StatusBarManager} = NativeModules;
  let currentDate = new Date().toJSON().slice(0, 10);

  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [items, setItems] = useState([]);
  const [datePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ASTRO');

  useEffect(() => {
    Platform.OS == 'ios'
      ? StatusBarManager.getHeight(statusBarFrameData => {
          setStatusBarHeight(statusBarFrameData.height);
        })
      : null;
  }, []);

  return (
    <FullScreenModalContainer>
      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={statusBarHeight + 30}>
        <View style={commonStyles.headerContainer}>
          <Pressable
            onPress={() => {
              setOpenAddScheduleModal(!openAddScheduleModal);
            }}>
            <Image style={commonStyles.closeIcon} source={require('../../../../app/assets/close.png')} />
          </Pressable>
        </View>

        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={commonStyles.bodyContainer}>
            <View style={commonStyles.textInputContainer}>
              <RegularWheelPicker title={'Artist'} selectedValue={selectedLanguage} onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)} />
            </View>
            <View style={commonStyles.textInputContainer}>
              <RegularTextInput title={'Date'} placeholder={currentDate} />
            </View>
            <View style={commonStyles.textInputContainer}>
              <RegularTextInput title={'Event'} placeholder="Write an event" />
            </View>
          </View>
        </ScrollView>

        <View style={commonStyles.buttonContainer}>
          <RegularButton text="Next" onPress={() => {}} />
        </View>
      </KeyboardAvoidingView>
    </FullScreenModalContainer>
  );
}

const styles = StyleSheet.create({});
