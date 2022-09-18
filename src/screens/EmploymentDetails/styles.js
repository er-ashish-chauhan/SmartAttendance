import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({

    selectAttendance: {
        flex: 1,
        backgroundColor: colors.white,
        paddingLeft: 25,
        paddingRight: 35
    },
    straightLine: {
        height:1,
        backgroundColor: '#1081FF',
    },
    firstSection: { 
        flexDirection: 'row', 
        marginTop: normalize(20), 
        width: '100%',
        alignItems:'center' 
    },
    employView: {
         paddingHorizontal: normalize(10), 
         width: '85%'
         },
    employTxt: {
        fontFamily: fonts.Medium,
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 20,
        color: colors.black,
    },
    flexFull: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '100%' ,
        marginTop:7
    },
    flexHalf: { 
        flexDirection: 'row',
         justifyContent: 'space-between', 
         width: '50%' 
        },
    cmpnyTxt: {
        fontFamily: fonts.Medium,
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 20,
        color: colors.lightblue,
    },
    listTxt: {
        fontFamily: fonts.Medium,
        fontSize: 14,
        lineHeight: 18,
        color: colors.black,
    },

  

});
