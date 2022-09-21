import {
  StyleSheet,
  Dimensions
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

const {
  width
} = Dimensions.get("window");

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
    marginLeft: width * 0.1,
    marginTop: 20,
    height: normalize(178),
    width: normalize(178),
    borderRadius: normalize(30),
    backgroundColor: '#B2D7FA',
    padding: 12,
    alignItems: "center",
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
    fontFamily: fonts.Medium,
    fontWeight: "400",
    alignSelf: 'center',
    marginTop: 15,
    lineHeight: 17
  },
  locationtext: {
    color: '#000000',
    opacity: 0.7,
    fontSize: 14,
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
    marginLeft: 60,
    marginTop: -20,
  },
  detailcontainer: {
    height: normalize(125),
    borderWidth: 1,
    borderColor: colors.lightblue,
    marginTop: normalize(50),
    borderRadius: normalize(10),
    flexDirection: 'row',
    padding: 10,
    marginHorizontal: normalize(30)
  },
  detailcontainertext: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    lineHeight: 22,
    color: colors.black,
  },
  divider: {
    height: 78,
    borderWidth: 1,
    width: 1,
    borderColor: colors.lightblue,
    marginLeft: normalize(20),
    alignSelf: 'center',
  },
  dateText: {
    fontSize: normalize(18),
    color: colors.black,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    lineHeight: 27
  },
  punchedText: {
    fontSize: 16,
    marginTop: 20,
    color: colors.primary,
    fontFamily: fonts.Bold,
  },
  timeText: {
    fontSize: 28,
    color: colors.black,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    marginTop: 11
  }
});
