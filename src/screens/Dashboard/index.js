import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const Dashboard = ({ navigation }) => {
  const [punchin, setPunchin] = useState(true);


  const detailsView = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -35,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: normalize(18),
                marginLeft: normalize(155),
              }}>
              Hi, John
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { }}
            style={{ alignSelf: 'flex-end', marginRight: normalize(30) }}>
            <Image source={images.bell}></Image>
          </TouchableOpacity>
        </View>
        <Text
          style={{ alignSelf: 'center', fontSize: normalize(18), marginTop: 20 }}>
          Friday
        </Text>
        <Text
          style={{ alignSelf: 'center', fontSize: normalize(18), marginTop: 18 }}>
          26 Sept, 2022
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: normalize(16),
            marginTop: 20,
            color: colors.lightblue,
            fontFamily: fonts.Bold,
          }}>
          Punched in
        </Text>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: normalize(26),
            marginTop: 20,
            fontFamily: fonts.Medium,
          }}>
          9:30 AM
        </Text>
      </View>
    );
  };
  const punchView = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image source={images.squarebox} style={styles.squarebox}></Image>
        <View style={styles.punchinImagecontainer}>
          <View style={styles.punchin}>
            <TouchableOpacity
              onPress={() => {
                setPunchin(!punchin);
              }}>
              <Image source={images.switch} style={styles.switch}></Image>
              <Text style={styles.punchtext}>
                {punchin ? 'Punch In' : 'Punch Out'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const breakView = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.locationtext}> Sec 32, Gurugram</Text>

        <View style={styles.eclipseborder}>
          <Image source={images.coffee} style={{ alignSelf: 'center' }} />
        </View>
      </View>
    );
  };
  const timedetailsView = () => {
    return (
      <View style={styles.detailcontainer}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.detailcontainertext}>
            Punch In
          </Text>
          <Text style={[styles.detailcontainertext, { marginTop: 2, color: colors.lightblue }]}>
            09:30:24
          </Text>

          <Text style={[styles.detailcontainertext, { marginTop: 5 }]}>
            Punch Out
          </Text>
          <Text style={[styles.detailcontainertext, { marginTop: 2, color: colors.lightblue }]}>
            09:30:24
          </Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: normalize(25) }}>
          <Text style={styles.detailcontainertext}>
            Break Hours
          </Text>
          <Text style={[styles.detailcontainertext, { marginTop: 2, color: colors.lightblue }]}>
            00:00:00
          </Text>

          <Text style={[styles.detailcontainertext, { marginTop: 5 }]}>
            Status
          </Text>
          <Text style={[styles.detailcontainertext, { marginTop: 2, color: "#16B643" }]}>
            Present
          </Text>
        </View>
        <View style={styles.divider}></View>
        <View style={{ flexDirection: "column", marginLeft: normalize(15), marginTop: normalize(12) }}>
          <Text style={styles.detailcontainertext}>
            Total Hours
          </Text>
          <Text style={[styles.detailcontainertext, { marginTop: 2, color: colors.lightblue }]}>
            00:00:00
          </Text>

          <Text style={[styles.detailcontainertext, { color: "#16B643" }]}>
            (+30m)
          </Text>
        </View>
      </View>
    )
  }
  return (
    <ScreenHOC
      backIcon={false}
      title={false}
      showcalenderimage={false}
      leftblueimage={true}>
      {detailsView()}
      {punchView()}
      {breakView()}
      {timedetailsView()}
    </ScreenHOC>
  );
};

export default Dashboard;
