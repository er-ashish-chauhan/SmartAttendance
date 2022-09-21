import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

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
  detailcontainer: {
    minHeight: normalize(60),
    borderWidth: 1,
    borderColor: colors.lightblue,
    marginTop: normalize(19),
    borderRadius: normalize(10),
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(14),
    marginHorizontal: normalize(30)
  },
  cardcontainer: {
    minHeight: normalize(90),
    width: normalize(150),
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: normalize(10),
    alignItems: "center"
  },
  bluecircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    // borderWidth: 1,
    // borderColor: colors.lightblue,
    backgroundColor: "#D2E9FF",
    alignSelf: 'center',
    padding: 6,
    marginTop: 15,
    elevation: 2
  },
  calendarContainer: {
    borderTopWidth: 1.2,
    borderBottomWidth: 1.2,
    // marginHorizontal: normalize(-15),
    padding: 20,
    paddingVertical: 15,
    borderTopColor: colors.theme_border,
    borderBottomColor: colors.theme_border,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  monthText: {
    fontFamily: fonts.Bold,
    fontSize: 14,
    lineHeight: 16.1,
    color: colors.primary,
    marginRight: 7
  },
  cardText: {
    fontFamily: fonts.Medium,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.23,
    color: colors.black,
    marginVertical: 14
  },
  timeText: {
    fontSize: 20,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    lineHeight: 23.23,
    color: colors.primary,
  },
  workingHours: {
    fontSize: 14,
    lineHeight: 16.23,
    color: colors.black,
    fontFamily: fonts.Medium,
    fontWeight: "400",
  },
  subtimeText: {
    fontSize: 10,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    lineHeight: 12,
    color: colors.primary,
    alignSelf: "center"
  },
});
