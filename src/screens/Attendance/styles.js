import {
    StyleSheet,
    Platform
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    roundBtnContainer: {
        borderWidth: 2,
        borderColor: colors.primary,
        padding: 8,
        borderRadius: 47,
        width: 63,
        height: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: Platform.OS == "android" ? normalize(11) : normalize(10),
        fontFamily: fonts.Bold,
        lineHeight: 11,
        color: colors.primary
    },
    calendarContainer: {
        marginTop: 11,
        borderTopWidth: 1.2,
        borderBottomWidth: 1.2,
        marginHorizontal: normalize(-15),
        padding: 20,
        paddingVertical: 15,
        borderTopColor: colors.theme_border,
        borderBottomColor: colors.theme_border,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    monthText: {
        fontFamily: fonts.Bold,
        fontSize: 14,
        lineHeight: 16.1,
        color: colors.primary,
        marginRight: 7
    },
    listContainer: {

    },
    headingConatiner: {
        backgroundColor: "#EBF5FF",
        marginHorizontal: normalize(-15),
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headingText: {
        fontFamily: fonts.Medium,
        fontSize: Platform.OS == "android" ? normalize(16) : normalize(13),
        lineHeight: 16.32,
        color: colors.black,
    },
    listDataContainer: {
        marginTop: 10
    },
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 14,
        paddingLeft: 5,
        paddingVertical: 5
    },
    dateText: {
        fontFamily: fonts.Bold,
        fontSize: 14,
        lineHeight: 16,
        color: colors.black
    },
    clockInText: {
        fontFamily: fonts.Medium,
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 16,
        color: "#16B643"
    },
    locationText: {
        fontSize: 10,
        fontFamily: fonts.Medium,
        lineHeight: 11.66,
        color: colors.grat_A1A1A1
    },
    leaveApprovedContainer: {
        flex: 1.42,
    },
    weekOffContainer: {
        flex: 1.78,
        alignItems: "center"
    }
});
