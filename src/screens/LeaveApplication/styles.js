import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  selectAttendance: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop:normalize(30)
  },
  straightLine: {
    height: 1,
    width:'100%',
    backgroundColor: colors.lightblue,
  },
  flexFull: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%' ,
    marginTop:25
},
flexHalf: { 
    flexDirection: 'row',
     justifyContent: 'space-between', 
     width: '50%' ,
     alignItems:'flex-end'
    },
  buttoncontainer: {
    flexDirection: 'row',
    width: normalize(300),
    height: normalize(45),
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.lightblue,
    borderRadius: 30,
    marginTop:40
  },
  buttoncontainer2: {
    flexDirection: 'row',
    width: normalize(300),
    height: normalize(45),
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: 30,
    marginTop:25,
    flexDirection: 'row',
  },
  addTxt: { 
    color: colors.lightblue, 
    fontSize: 14, 
    fontWeight: '900',
    lineHeight:16,
    fontFamily:fonts.Medium,
  },
  submitTxt: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '700'
  },
  dropdownView: {
    backgroundColor: '#fff',
    borderWidth: 0,
  },
  arrowIconsty: {
    width: 25,
    arrowColor: '#fff',
    height: 25,
  },
  textArea: {
    marginTop: normalize(26), 
    borderWidth: 1, 
    borderColor: colors.lightblue, 
    height: normalize(133), 
    borderRadius: 10,
    paddingHorizontal: 13
  },
});
