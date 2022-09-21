import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  buttoncontainer: {
    flexDirection: 'row',
    width: normalize(105),
    height: normalize(26),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightblue,
    borderRadius: 47,
  },
  detailcontainer: {
    height: normalize(71),
    borderWidth: 1,
    borderColor: colors.lightblue,

    marginTop: normalize(20),
    borderRadius: normalize(10),
    // flexDirection: 'row',
    padding: normalize(14),
    marginHorizontal: normalize(30)
  },
  holidaytitlecontainer: {
    height: normalize(42),
    backgroundColor: "#EBF5FF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: normalize(30),
    alignItems: "center"
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  lableText: {
    fontSize: 14,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    color: colors.primary,
    lineHeight: 16
  },

});
