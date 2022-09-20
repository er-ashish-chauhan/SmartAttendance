import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
    selectAttendance: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        marginTop: normalize(25)
    },
    ContactText: {
        fontFamily: fonts.Thin,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: colors.black,
        marginHorizontal: normalize(22),
        textAlign: 'center',
    },
    ContactHeading: {
        fontFamily: fonts.Thin,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 26,
        color: colors.black,
        textAlign: 'center',
        marginTop: 30,
    },
    imgHcl: {
        width: normalize(120),
        height: normalize(101),
        marginTop: 30,
        alignSelf: 'center',
    },
});
