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
    color: '#FFFFFF',
  },
  squarebox: {
    marginLeft: normalize(30),
    marginTop: normalize(115),
  },
  punchinImagecontainer: {
    marginLeft: normalize(38),
    marginTop: 20,
    height: normalize(168),
    width: normalize(168),
    borderRadius: normalize(30),
    backgroundColor: '#B2D7FA',
    padding: 10,
  },
  punchin: {
    height: normalize(150),
    width: normalize(150),
    borderRadius: normalize(25),
    backgroundColor: colors.lightblue,
  },
  switch: {
    alignSelf: 'center',
    marginTop: normalize(30),
  },
  punchtext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: fonts.Light,
    alignSelf: 'center',
    marginTop: normalize(15),
  },
  locationtext: {
    color: '#000000',
    opacity: 0.7,
    marginLeft: normalize(120),
    fontSize: 14,
    marginTop: normalize(20),
  },
  eclipseborder: {
    height: normalize(44),
    width: normalize(44),
    borderRadius: normalize(22),
    borderWidth: 4,
    borderColor: '#FCC1C1',
    backgroundColor: '#FF0000',
    alignItems: 'center',
    padding: normalize(8),
    marginLeft: 70,
    marginTop: -20,
  },
  detailcontainer: {
    height: normalize(115),
    borderWidth: 1,
    borderColor: colors.lightblue,

    marginTop:normalize(50),
    borderRadius: normalize(10),
    flexDirection: 'row',
    padding: 10,
    marginHorizontal:normalize(30)
  },
  detailcontainertext: {
    fontSize: normalize(14),
    lineHeight: normalize(22),
    color: '#000000',
  },
  divider: {
    height: 78,
    borderWidth: 1,
    width: 1,
    borderColor: colors.lightblue,
    marginLeft: normalize(20),
    alignSelf: 'center',
  },
});
