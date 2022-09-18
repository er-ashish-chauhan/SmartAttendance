import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({

    selectAttendance: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
    },
    shadow: {
        padding:1,
        shadowColor: 'rgba(186, 243, 236, 0.4)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 7.49,
    
        elevation: 10
      },
    straightLine: {
        height:1,
        backgroundColor: '#1081FF',
    },
    boxView: {
        marginTop: normalize(12),
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightblue,
        paddingBottom: 20
    },
    dateText: {
        fontFamily: fonts.Medium,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: colors.black,
    },
    issueRTxt: {
        fontFamily: fonts.Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        color: colors.black,
        marginTop: 7,
    },
    emplyTxt: {
        fontFamily: fonts.Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        color: colors.lightblue,
        marginTop: 7,
    },
    resolveTxt: {
        fontFamily: fonts.Medium,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 14,
        color: '#16B643',
        marginTop: 7,
    }

});
