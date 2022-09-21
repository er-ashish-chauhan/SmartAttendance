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
  selectAttendance: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
  },
  ContactText: {
    fontFamily: fonts.Light,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: colors.black,
    // marginHorizontal: normalize(40),
    textAlign: 'center',
  
  },
  contentContainer: {
    alignItems: "center",
    marginHorizontal: normalize(30)
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
    width: normalize(135),
    height: normalize(116),
    marginTop: 21,
    // alignSelf: 'center',
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  contactText: {
    fontSize: 14,
    lineHeight: 26,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    color: colors.black,
    marginLeft: 8
  }
});
