import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';
import fonts from '../../utils/fonts';
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
        <Text style={styles.lableText}>
          {text}
        </Text>
        <Text style={[styles.lableText, { color: colors.black }]}>
          {'Aug 12, 2022'}
        </Text>
      </View>
    )
  }

  const bottomimageView = () => {
    return (
      <View style={{
        flex: 1, justifyContent: "flex-end"
      }}>
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
        <Text style={[styles.lableText, {
          alignSelf: 'flex-end',
          color: colors.black
        }]}>{'My Leave'}</Text>
        <TouchableOpacity
          style={[styles.buttoncontainer]}
          onPress={() => navigation.navigate('LeaveApplication')}>
          <Text style={[styles.lableText, {
            color: '#FFFFFF',
            fontSize: 12,
            fontFamily: fonts.Bold
          }]}>
            {'Apply Leave'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.detailcontainer}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{ fontSize: 16, color: '#FF0000', flex: 0.3 }}>
            02
          </Text>
          <Text style={{ fontSize: 16, color: '#16B643', flex: 0.4 }}>
            03
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
          <Text style={[styles.lableText, {
            alignSelf: 'flex-start',
            fontSize: 12,
            color: colors.black
          }]}>
            Sick Leaves
          </Text>
          <Text style={[styles.lableText, {
            alignSelf: 'center',
            fontSize: 12,
            color: colors.black
          }]}>Annual Leaves</Text>
          <Text style={[styles.lableText, {
            alignSelf: 'flex-end',
            fontSize: 12,
            color: colors.black
          }]}>
            Casual Leaves
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.flexRow, { marginTop: normalize(20), alignSelf: "center" }]}
        onPress={() => navigation.navigate('LeavesHistory')}>
        <Text style={[styles.lableText, { marginRight: 5 }]}>Leaves History</Text>
        <Image
          source={images.rightarrow}
          style={{
            width: 14,
            height: 14,
            marginTop: 2.5
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.holidaytitlecontainer}>
        <Text style={[styles.lableText, { fontSize: 16, alignSelf: 'center', color: colors.black }]}>
          {'Holiday Name'}
        </Text>
        <Text style={[styles.lableText, { fontSize: 16, alignSelf: 'center', flex: 0.37, color: colors.black }]}>
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
