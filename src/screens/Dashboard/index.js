import React, { useState } from 'react';
import {
  View, Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const {
  width
} = Dimensions.get("window");

const Dashboard = ({ navigation }) => {
  const [punchin, setPunchin] = useState(true);


  const detailsView = () => {
    return (
      <View style={{
        marginTop: 20,
        alignItems: "center"
      }}>
        <Text
          style={styles.dateText}>
          Friday
        </Text>
        <Text
          style={[styles.dateText, { marginTop: normalize(2) }]}>
          26 Sept, 2022
        </Text>
        <Text
          style={styles.punchedText}>
          Punched In
        </Text>
        <Text
          style={styles.timeText}>
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
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.punchin}
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
    );
  };

  const breakView = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          marginLeft: width * 0.33,
          marginTop: normalize(20),
        }}>
          <Icon name='location-on' color={colors.grat_A1A1A1} size={12} />
          <Text style={styles.locationtext}> Sec 32, Gurugram</Text>
        </View>
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
          <Text style={[styles.detailcontainertext, {
            marginTop: 2,
            color: colors.lightblue,
            fontSize: 16
          }]}>
            09:30:24
          </Text>

          <Text style={[styles.detailcontainertext, { marginTop: 5 }]}>
            Punch Out
          </Text>
          <Text style={[styles.detailcontainertext, {
            marginTop: 2,
            color: colors.lightblue,
            fontSize: 16
          }]}>
            09:30:24
          </Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: normalize(25) }}>
          <Text style={styles.detailcontainertext}>
            Break Hours
          </Text>
          <Text style={[styles.detailcontainertext, {
            marginTop: 2,
            color: colors.lightblue,
            fontSize: 16
          }]}>
            00:00:00
          </Text>

          <Text style={[styles.detailcontainertext, { marginTop: 5 }]}>
            Status
          </Text>
          <Text style={[styles.detailcontainertext, {
            marginTop: 2,
            color: "#16B643",
            fontSize: 16
          }]}>
            Present
          </Text>
        </View>
        <View style={styles.divider}></View>
        <View style={{ flexDirection: "column", marginLeft: normalize(15), marginTop: normalize(12) }}>
          <Text style={styles.detailcontainertext}>
            Total Hours
          </Text>
          <Text style={[styles.detailcontainertext, {
            marginTop: 2,
            color: colors.lightblue,
            fontSize: 16
          }]}>
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
      showHeaderWithoutTitle={true}
      backgroundColor={colors.white}
      dashboardHeader={true}
      customHeaderHeading="Hi John"
      navigation={navigation}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{}}
        contentContainerStyle={{
          paddingBottom: width * 0.15
        }} >
        {detailsView()}
        {punchView()}
        {breakView()}
        {timedetailsView()}
      </ScrollView>
    </ScreenHOC>
  );
};

export default Dashboard;
