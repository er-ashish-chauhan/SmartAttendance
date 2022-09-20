import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ScreenHOC from '../../components/HOC/Screen';
import colors from '../../utils/colors';
import { normalize } from '../../utils/normalizeHeightwidth';
import { styles } from './styles';

const hitSlop = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
}

const {
  width,
  height
} = Dimensions.get("window");

const MONTH_YEAR_FORMAT = "MMMM, yyyy";

const Reports = ({ navigation }) => {

  const [attendanceDate, setAttendanceDate] = React.useState(moment(Date.now()).startOf('month'));

  // Call useFocusEffect hook
  useFocusEffect(
    React.useCallback(() => {
      setAttendanceDate(moment(Date.now()));
    }, [])
  );

  /**
   * @method changeMonthHandler
   * @description Method used for handle the action for change month and api call for the specific month
   */
  const changeMonthHandler = async (type) => {

    let updatedDate = "";
    if (type == "next") {
      updatedDate = moment(attendanceDate).add(1, 'months').startOf('month');
      let currentDate = moment(Date.now()).startOf('month');
      if (updatedDate > currentDate) return;
    } else {
      updatedDate = moment(attendanceDate).subtract(1, 'months').startOf('month')
    }

    setAttendanceDate(updatedDate);
  }

  const CardsView = (text) => {
    return (
      <View style={styles.cardcontainer}>
        <View
          style={[
            styles.bluecircle,
            {
              backgroundColor: 'white',
              borderColor: colors.lightblue,
            },
          ]}>
          <Text
            style={{
              color: colors.lightblue,
              fontSize: 18,
              alignSelf: 'center',
            }}>
            01
          </Text>
        </View>
        <Text style={{ fontSize: 14, alignSelf: "center", marginTop: normalize(5) }}>
          {text}
        </Text>
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
      customHeaderHeading={"Monthly Reports"}
      backgroundColor={colors.white}
      customHeader={true}>
      {/* Change date view */}
      <View style={styles.calendarContainer}>
        <TouchableOpacity
          hitSlop={hitSlop}
          activeOpacity={0.6}
          onPress={() => changeMonthHandler("prev")}>
          <Icon name="arrow-back-ios" size={22} color={colors.primary} />
        </TouchableOpacity>
        <View style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center"
        }}>
          <Text style={styles.monthText}>{moment(attendanceDate).format(MONTH_YEAR_FORMAT)}</Text>
          <Icon name="calendar-today" size={18} color={colors.primary} />
        </View>
        <TouchableOpacity
          hitSlop={hitSlop}
          activeOpacity={0.6}
          onPress={() => changeMonthHandler("next")}>
          <Icon name="arrow-forward-ios" size={22} color={colors.primary} />
        </TouchableOpacity>
      </View>
      {/* Details View */}
      <View style={styles.detailcontainer}>
        <Text style={{ fontSize: 14 }}>
          Total Working Hours
        </Text>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 14, color: colors.lightblue, alignItems: "flex-end" }}>
            37:40
          </Text>
          <Text style={{ fontSize: 10, color: colors.lightblue, alignItems: "flex-end" }}>
            HH:MM
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 30, marginTop: normalize(15), justifyContent: "space-between" }}>
        {CardsView("Total Absent")}
        {CardsView("Over Time")}
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 30, marginTop: normalize(15), justifyContent: "space-between" }}>
        {CardsView("Early In")}
        {CardsView("Total Present")}
      </View>
      <View style={{ flexDirection: "row", marginHorizontal: 30, marginTop: normalize(15), justifyContent: "space-between" }}>
        {CardsView("Late Arrival")}
        {CardsView("Early Out")}
      </View>
    </ScreenHOC>
  );
};
export default Reports