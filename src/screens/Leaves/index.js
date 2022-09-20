import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const Leaves = ({ navigation }) => {
  
  const holidaysList = (text) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          marginTop: normalize(20),
        }}>
        <Text style={{ fontSize: 14, alignSelf: 'center', color: '#0079FF' }}>
          {text}
        </Text>
        <Text style={{ fontSize: 14, alignSelf: 'center', }}>
          {'Aug 12 ,2022'}
        </Text>
      </View>
    )
  }

  const bottomimageView = () => {
    return (
    
      <View style={{ marginBottom: normalize(-40), flex: 1, justifyContent: "flex-end" }}>
        <Image source={images.bottomblueimage} />
      </View>
 
    )
  }

  return (
    <ScreenHOC
      backIcon={false}
      title={false}
      showcalenderimage={false}
      leftblueimage={false}
      safeAreaRequired={true}
      customHeaderHeading={'Vaccations & Leaves'}
      backgroundColor={colors.white}
      customHeader={true}>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: normalize(30),
          marginTop: normalize(20),
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 14, alignSelf: 'flex-end' }}>{'My Leaves'}</Text>
        <TouchableOpacity
          style={[styles.buttoncontainer]}
          onPress={() => navigation.navigate('LeaveApplication')}>
          <Text style={{ color: '#FFFFFF', fontSize: 12, fontWeight: '500' }}>
            {'Apply Leaves'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailcontainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{ fontSize: 16, color: '#FF0000', flex: 0.3 }}>
            01
          </Text>
          <Text style={{ fontSize: 16, color: '#16B643', flex: 0.4 }}>
            01
          </Text>
          <Text style={{ fontSize: 16, color: '#16B643', flex: 0.22 }}>
            01
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
          }}>
          <Text style={{ fontSize: 12, alignSelf: 'flex-start' }}>
            Sick Leaves
          </Text>
          <Text style={{ fontSize: 12, alignSelf: 'center' }}>Annual Leaves</Text>
          <Text style={{ fontSize: 12, alignSelf: 'flex-end' }}>
            Casual Leaves
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{ marginTop: normalize(20) }} onPress={()=>navigation.navigate('LeavesHistory')}>
        <Image source={images.leaveshistory} style={{ alignSelf: 'center' }} />
      </TouchableOpacity>
      <View style={styles.holidaytitlecontainer}>
        <Text style={{ fontSize: 16, alignSelf: 'center' }}>
          {'Holiday Name'}
        </Text>
        <Text style={{ fontSize: 16, alignSelf: 'center', flex: 0.4 }}>
          {'Date'}
        </Text>
      </View>
      {holidaysList("Rakshabandhan")}
      {holidaysList("Independance Day")}
      {holidaysList("Diwali")}
      {holidaysList("New Year")}
      {bottomimageView()}

    </ScreenHOC>
  );
};
export default Leaves;
