import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

import {commonStyles} from '../../../styles/common';
import {FullScreenModalContainer} from '../../../styles/styled';
import RegularButton from '../../UI/RegularButton';
import RegularTextInput from '../../UI/RegularTextInput';
import RegularWheelPicker from '../../UI/RegularWheelPicker';

const initialValues = {
  artist: '',
  date: '',
  event: '',
};

type TAddSchedule = {
  openAddScheduleModal: boolean;
  setOpenAddScheduleModal: (value: boolean) => void;
};

export default function AddSchedule({openAddScheduleModal, setOpenAddScheduleModal}: TAddSchedule) {
  // const {StatusBarManager} = NativeModules;
  const height = useHeaderHeight();
  let currentDate = new Date().toJSON().slice(0, 10);

  // const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [values, setValues] = useState(initialValues);
  const [items, setItems] = useState([]);
  const [datePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('ASTRO');

  // useEffect(() => {
  //   Platform.OS == 'ios'
  //     ? StatusBarManager.getHeight(statusBarFrameData => {
  //         setStatusBarHeight(statusBarFrameData.height);
  //       })
  //     : null;
  // }, []);

  return (
    <FullScreenModalContainer>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={height + 30}>
        <View style={commonStyles.headerContainer}>
          <Pressable
            onPress={() => {
              setOpenAddScheduleModal(!openAddScheduleModal);
            }}>
            <Image
              style={commonStyles.closeIcon}
              source={require('../../../../app/assets/close.png')}
            />
          </Pressable>
        </View>

        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={commonStyles.bodyContainer}>
            <View style={commonStyles.textInputContainer}>
              <RegularWheelPicker
                title={'Artist'}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
              />
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
