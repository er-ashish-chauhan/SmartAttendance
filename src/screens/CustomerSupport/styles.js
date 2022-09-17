import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  selectAttendance: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  straightLine: {
    height: 1,
    backgroundColor: '#1081FF',
    elevation: 2,
  },
  buttoncontainer: {
    flexDirection: 'row',
    width: normalize(300),
    height: normalize(40),
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: colors.lightblue,
    borderRadius: 30,
    marginTop:35
  },
  buttoncontainer2: {
    flexDirection: 'row',
    width: normalize(300),
    height: normalize(40),
    alignSelf: 'center',
    alignItems:'center',
    justifyContent:'center',
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: 30,
    marginTop:25,
    flexDirection: 'row',
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
