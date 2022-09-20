import React from "react";
import {
    FlatList,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ScreenHOC from "../../components/HOC/Screen";
import colors from "../../utils/colors";
import { styles } from "./styles";
import moment from 'moment';
import { normalize } from "../../utils/normalizeHeightwidth";
const hitSlop = {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
}
const MONTH_YEAR_FORMAT = "MMMM, yyyy";
const LeavesHistory=({navigation})=>{
    const [leavesMonth, setleavesMonth] = React.useState(moment(Date.now()).startOf('month'));
    const ButtonsView = () => {
        return (
            <View style={[
                styles.flexRow,
                {
                    marginTop: normalize(13),
                    flexWrap: "wrap"
                }]}>
                <View style={{ marginRight: 7 }}>
                    {RoundedButton(
                        "Absent",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 7 }}>
                    {RoundedButton(
                        "Early In",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 7 }}>
                    {RoundedButton(
                        "Early Out",
                        () => { }
                    )}
                </View>
                <View style={{ marginRight: 7 }}>
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
    return(
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
                </View>
                
            </ScreenHOC>
    )
}
export default LeavesHistory