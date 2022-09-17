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
        shadowColor: 'rgba(186, 243, 236, 0.2)',
        shadowOffset: {
          width: 0,
          height: 1
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.49,
    
        elevation: 10
      },
    straightLine: {
        flex: 0.006,
        backgroundColor: '#1081FF',
        elevation: 2,
    },
    boxView: {
        marginTop: normalize(12),
        padding: 14,
        borderWidth: 1,
        borderRadius: 10
    },
    flexRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    dateText: {
        fontFamily: fonts.Thin,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        color: colors.black,
    },
    marktext: {
        fontFamily: fonts.Medium,
        fontSize: 12,
        lineHeight: 20,
        color: colors.lightblue,
    },
    listtexts: {
        fontFamily: fonts.Medium,
        fontSize: 14,
        lineHeight: 20,
        color: colors.black,
        marginTop: 7,
        width: '80%'
    }

});
