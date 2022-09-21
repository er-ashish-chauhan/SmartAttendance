import React, { } from 'react';
import {
    FlatList,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import ScreenHOC from '../../components/HOC/Screen';
import { styles } from './styles';
import { normalize } from '../../utils/normalizeHeightwidth';
import images from '../../utils/images';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import colors from '../../utils/colors';
import moment from 'moment';
import { useFocusEffect } from '@react-navigation/native';

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

const attendanceRecord = [
    {
        date: "22nd",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "23rd",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "24th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "25th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "26th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "27th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 3
    }, {
        date: "28th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "29th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }, {
        date: "30th",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 2
    }, {
        date: "31st",
        clockIn: "09:30 AM",
        clockOut: "06:30 PM",
        location: "Sec 63, Noida",
        break: "01 hr",
        totalhrs: "10 hrs",
        status: 1
    }
]

const Attendance = ({ navigation }) => {

    const [attendanceDate, setAttendanceDate] = React.useState(moment(Date.now()).startOf('month'));
    const [attendanceList, setAttendanceList] = React.useState(attendanceRecord);

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

    const ButtonsView = () => {
        return (
            <View style={[
                styles.flexRow,
                {
                    marginTop: normalize(13),
                    flexWrap: "wrap"
                }]}>
                <View style={{ marginRight: 2 }}>
                    {RoundedButton(
                        "Absent",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 2 }}>
                    {RoundedButton(
                        "Early In",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 2 }}>
                    {RoundedButton(
                        "Early Out",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 2 }}>
                    {RoundedButton(
                        "Late In",
                        () => { }
                    )}
                </View>
                {RoundedButton(
                    "Overtime",
                    () => { }
                )}
            </View>
        );
    };

    const RoundedButton = (
        btnText = "",
        btnAction
    ) => {
        return (
            <TouchableOpacity
                style={styles.roundBtnContainer}
                onPress={() => btnAction()}
                activeOpacity={0.6}>
                <Text style={styles.btnText}>{btnText}</Text>
            </TouchableOpacity>
        )
    }

    const listItems = (_item) => {
        return (
            <View style={[styles.itemContainer, {
                backgroundColor: _item?.status == 3 ? "#FFEFEF" : colors.white
            }]}>
                <View style={{ flex: 0.3, marginRight: 7 }}>
                    <Text style={styles.dateText}>{_item.date}</Text>
                </View>
                {_item.status == 1 && (
                    <>
                        <View style={{ flex: 0.5, marginRight: 7 }}>
                            <Text style={styles.clockInText}>{_item.clockIn}</Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 2
                            }}>
                                <Icon name='location-on' color={colors.grat_A1A1A1} size={12} />
                                <Text style={styles.locationText}>{_item.location}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.5, marginRight: 7 }}>
                            <Text style={[styles.clockInText, { color: colors.danger }]}>{_item.clockOut}</Text>
                            <View style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 2
                            }}>
                                <Icon name='location-on' color={colors.grat_A1A1A1} size={12} />
                                <Text style={styles.locationText}>{_item.location}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, marginRight: 7 }}>
                            <Text style={[styles.clockInText, { color: colors.grat_A1A1A1 }]}>{_item.totalhrs}</Text>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={[styles.clockInText, { color: colors.grat_A1A1A1 }]}>{_item.totalhrs}</Text>
                        </View>
                    </>
                )}
                {_item.status == 2 && (
                    <>
                        <View style={styles.leaveApprovedContainer}>
                            <Text style={[styles.clockInText, { color: colors.danger }]}>{"Leave Approved"}</Text>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={[styles.clockInText, { color: colors.grat_A1A1A1 }]}>{_item.totalhrs}</Text>
                        </View>
                    </>
                )}
                {_item.status == 3 && (
                    <>
                        <View style={styles.weekOffContainer}>
                            <Text style={[styles.clockInText, { color: colors.black }]}>{"Weekend Off"}</Text>
                        </View>
                    </>
                )}
            </View>
        )
    }


    return (
        <ScreenHOC
            backIcon={false}
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            customHeaderHeading={'My Attendance'}
            backnavigation={() => navigation.goBack()}>
            <View style={[styles.container]}>
                {ButtonsView()}
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

                <View style={styles.listContainer}>
                    <View style={styles.headingConatiner}>
                        <View style={{ flex: 0.3, marginRight: 7 }}>
                            <Text style={styles.headingText}>Date</Text>
                        </View>
                        <View style={{ flex: 0.5, marginRight: 7 }}>
                            <Text style={styles.headingText}>Clock In</Text>
                        </View>
                        <View style={{ flex: 0.5, marginRight: 7 }}>
                            <Text style={styles.headingText}>Clock Out</Text>
                        </View>
                        <View style={{ flex: 0.3, marginRight: 7 }}>
                            <Text style={styles.headingText}>Break</Text>
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <Text style={styles.headingText}>Tot. Hrs</Text>
                        </View>
                    </View>
                    <View style={styles.listDataContainer}>
                        <FlatList
                            data={attendanceList}
                            renderItem={({ item }) => listItems(item)}
                            keyExtractor={(item, index) => String(index + 1)}
                            contentContainerStyle={{
                                paddingBottom: height * 0.3
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        </ScreenHOC>
    );
};

export default Attendance;
