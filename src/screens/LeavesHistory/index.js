import React from "react";
import {
    FlatList,
    Dimensions,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import ScreenHOC from "../../components/HOC/Screen";
import colors from "../../utils/colors";
import { styles } from "./styles";
import moment from 'moment';
import { normalize } from "../../utils/normalizeHeightwidth";
import fonts from "../../utils/fonts";
import images from "../../utils/images";
const hitSlop = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
}
const LeavesList = [
    {
        date: "28th August, 2022",
        Reason: "Gingerbread donut shortbread jelly-o halvah jelly beansdessert donut gummies. Fruitcake pastry cake donut",
        leaveType: "Sick Leave",
        status: 3
    }, {
        date: "28th August, 2022",
        Reason: "Gingerbread donut shortbread jelly-o halvah jelly beansdessert donut gummies. Fruitcake pastry cake donut",
        leaveType: "Sick Leave",
        status: 2
    }, {
        date: "28th August, 2022",
        Reason: "Gingerbread donut shortbread jelly-o halvah jelly beansdessert donut gummies. Fruitcake pastry cake donut",
        leaveType: "Sick Leave",
        status: 1
    }, {
        date: "28th August, 2022",
        Reason: "Gingerbread donut shortbread jelly-o halvah jelly beansdessert donut gummies. Fruitcake pastry cake donut",
        leaveType: "Sick Leave",
        status: 1
    },
]

const MONTH_YEAR_FORMAT = "MMMM, yyyy";
const LeavesHistory = ({ navigation }) => {
    const [leavesMonth, setleavesMonth] = React.useState(moment(Date.now()).startOf('month'));
    const ButtonsView = () => {
        return (
            <View style={
                {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: normalize(13),
                    flexWrap: "wrap"
                }}>
                <View style={{ marginRight: 7 }}>
                    {RoundedButton(
                        "Approved",
                        () => { }
                    )}
                </View>


                <View style={{ marginRight: 7 }}>
                    {RoundedButton(
                        "Rejected",
                        () => { }
                    )}
                </View>
                {RoundedButton(
                    "Pending",
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
    const renderItems = (item, index) => {
        return (
            <View style={styles.cardcontainer}>
                <Text style={styles.dateText}>
                    {item?.date}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12 }}>
                    <Text style={styles.statustext}>Leave Type</Text>
                    <Text style={styles.statustext}>Status</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                    <Text style={[styles.statustext, { color: colors.lightblue, opacity: 1 }]}>{item?.leaveType}</Text>
                    <Text style={[styles.statustext, { color: item.status == 3 ? "#16B643" : "red", opacity: 1 }]}>Approved</Text>
                </View>

                <Text style={[styles.statustext, { marginTop: 14 }]}>{"Reason"}</Text>
                <Text style={[styles.statustext, { fontSize: 12, lineHeight: 18, opacity: 1, marginTop: 3 }]}>{item.Reason}</Text>
                {item.status == 1 &&
                    <View style={styles.buttoncontainer}>
                        <Text style={{ alignSelf: "center", color: "#FFFFFF", fontSize: 12, fontFamily: fonts.Bold }}>Cancel Leave</Text>
                    </View>}
            </View>
        )
    }
    const changeMonthHandler = async (type) => {

        let updatedDate = "";
        if (type == "next") {
            updatedDate = moment(leavesMonth).add(1, 'months').startOf('month');
            let currentDate = moment(Date.now()).startOf('month');
            if (updatedDate > currentDate) return;
        } else {
            updatedDate = moment(leavesMonth).subtract(1, 'months').startOf('month')
        }

        setleavesMonth(updatedDate);
    }
    return (
        <ScreenHOC
            backIcon={true}
            title={false}
            showcalenderimage={false}
            leftblueimage={false}
            customHeader={true}
            safeAreaRequired={true}
            customHeaderHeading={'Leaves History'}
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
                        <Text style={styles.monthText}>{moment(leavesMonth).format(MONTH_YEAR_FORMAT)}</Text>
                        <Icon name="calendar-today" size={18} color={colors.primary} />
                    </View>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        activeOpacity={0.6}
                        onPress={() => changeMonthHandler("next")}>
                        <Icon name="arrow-forward-ios" size={22} color={colors.primary} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={LeavesList}
                    contentContainerStyle={{
                        paddingBottom: 50,
                    }}
                    renderItem={({ item }) => renderItems(item)}
                    keyExtractor={(item, index) => String(index + 1)}
                    showsVerticalScrollIndicator={false}
                />

            </View>
            <View style={{}}>
                <Image source={images.bottomblueimage} style={{
                    position: "absolute", bottom: 0,
                }} />
            </View>
        </ScreenHOC>
    )
}
export default LeavesHistory