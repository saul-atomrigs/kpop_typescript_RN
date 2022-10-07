import {Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Agenda} from 'react-native-calendars';
import {BellRinging, Plus} from 'phosphor-react-native';
import {NavigationPropTypes} from '../../../../App';

import {COLORS, commonStyles, WIDTH, HEIGHT} from '../../../styles/common';
import AddSchedule from './AddSchedule';

// import Amplify, { API, graphqlOperation } from 'aws-amplify';
// import config from '../src/aws-exports';
// import { listEvents } from '../src/graphql/queries';

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;

export default function Calendar({navigation}: NavigationPropTypes) {
  const [items, setItems] = useState([]);
  const [openAddScheduleModal, setOpenAddScheduleModal] = useState(false);

  const fetchItems = async () => {
    try {
      // const itemData = await API.graphql(graphqlOperation(listEvents))
      // setItems(itemData.data.listEvents.items)
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchItems();
  });

  // Read isEnabled from AsyncStorate
  // const STORAGE_KEY = props.id;
  // useEffect(() => {
  //   AsyncStorage.getItem(STORAGE_KEY).then(value => {
  //     if (value !== null) {
  //       setIsEnabled(JSON.parse(value));
  //     }
  //   });
  // });

  const onPressItem = (props: any) =>
    navigation.navigate('DetailedSchedule', {
      artist: props.artist,
      event: props.event,
      date: props.date,
      id: props.id,
    });

  const rowHasChanged = (r1, r2) => r1.text !== r2.text;

  /**
   * COMPONENTS:
   */
  function renderEmptyDate() {
    return <View style={styles.emptyDate}>{/* <Text>Waiting for new activities...</Text> */}</View>;
  }

  /**
   * Each component in the Agenda
   * @param props
   * @returns Each component in the Agenda
   */
  const renderItem = (props: any) => {
    return (
      <SafeAreaView style={commonStyles.app}>
        <TouchableOpacity style={styles.item} onPress={onPressItem}>
          <Text style={styles.artist}>{props.artist}</Text>
          <View style={styles.eventContainer}>
            <View>{props.icon}</View>
            <Text style={styles.event}>{props.event}</Text>
          </View>
          <View style={styles.stats}></View>
          {/* <Divider style={styles.divider} /> */}
          <View style={styles.stats}>
            <BellRinging size={20} />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  // GROUP MULTIPLE SCHEDULES ON THE SAME DAY & CONVERT TO CALENDAR TYPE OBJECT
  let itemsReduced = items.reduce(function (r, a) {
    r[a.date] = r[a.date || []];
    r[a.date].push(a);
    return r;
  }, Object.create(null));

  return (
    <>
      <Agenda
        items={itemsReduced}
        dayLoading={false}
        renderItem={renderItem}
        renderEmptyData={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        showClosingKnob={true}
        markingType={'custom'}
        // refreshing={refreshing}
        // onRefresh={onRefresh}
        showScrollIndicator={true}
        theme={{
          textDayFontWeight: '500',
          textMonthFontWeight: '500',
          todayButtonFontWeight: '500',
          textDayHeaderFontWeight: '500',
          calendarBackground: '#fff',
          agendaKnobColor: 'gray',
          agendaTodayColor: 'blue',
          dotColor: '#000',
          textSectionTitleColor: '#000',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#000',
          selectedDayTextColor: '#ffffff',
          monthTextColor: 'blue',
          todayTextColor: 'blue',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          selectedDotColor: '#ffffff',
          'stylesheet.calendar.header': {
            // marginBottom: 80,
          },
        }}
        // style={styles.container}
        hideExtraDays={false}
      />

      <View style={styles.floatingBtnContainer}>
        <TouchableOpacity
          style={styles.floatingBtn}
          // onPress={() => navigation.navigate('AddSchedule')}
          onPress={() => setOpenAddScheduleModal(!openAddScheduleModal)}>
          <Plus color="snow" weight="bold" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openAddScheduleModal}
        onRequestClose={() => {
          setOpenAddScheduleModal(!openAddScheduleModal);
        }}>
        <AddSchedule />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 13,
    padding: 10,
    marginTop: 10,
    marginRight: 20,
  },
  artist: {
    fontWeight: '800',
  },
  eventContainer: {
    flexDirection: 'row',
  },
  event: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  stats: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'flex-end',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  floatingBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingBtn: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 100,
    borderRadius: 20,
    padding: 10,
    // elevation: 2,
    backgroundColor: 'black',
    // shadow ios:
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // shadow android:
    elevation: 0.8,
  },
  floatingBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    textDecorationLine: 'underline',
  },
});
