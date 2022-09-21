import { StyleSheet } from 'react-native';
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
        fontSize: normalize(11),
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
        fontSize: 14,
        lineHeight: 16.32,
        color: colors.black,
    },
    listDataContainer: {
        marginTop: 10
    },

    dateText: {
        fontFamily: fonts.Medium,
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
    statustext: {
        fontSize: 12,
        color: colors.black,
        opacity: 0.5,
        lineHeight: 14
    },
    cardcontainer: {
        flex: 1,
        borderRadius: 10,
        marginTop: 10,
        padding: 14,
        borderWidth: 1,
        borderColor: colors.lightblue,
        backgroundColor: colors.white,
    },
    buttoncontainer: {
        alignSelf: "flex-end",
        backgroundColor: "#FF0000",
        width: normalize(105),
        height: normalize(26),
        borderRadius: 47,
        alignItems: "center",
        justifyContent: "center"
    }
});
