import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {normalize} from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  loginview: {
    marginTop: normalize(70),
    backgroundColor: colors.lightblue,
    flex: 1,
    borderRadius: 30,
    padding: 30,
  },
  logintext: {
    fontFamily: fonts.Thin,
    fontWeight: '400',
    fontSize: 22,
    color: colors.white,
  },
  logintexts: {
    fontFamily: fonts.Thin,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 26,
    color: colors.black,
  },
  listtexts: {
    fontFamily: fonts.Thin,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 26,
    color: colors.black,
    marginLeft: 10,
  },
  selectAttendance: {
    // height: normalize(80),
    backgroundColor: 'red',
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  straightLine: {
    flex: 0.006,
    backgroundColor: '#1081FF',
    elevation: 2,
  },
  securityImg: {
    right: normalize(10),
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
  },
  securityImgView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
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
  securityListText: {fontSize: 14, fontWeight: '400'},
});
