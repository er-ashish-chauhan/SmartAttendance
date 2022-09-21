import { StyleSheet,
Dimensions } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

const {
  width
} = Dimensions.get("window");

export const styles = StyleSheet.create({
  loginview: {
    backgroundColor: colors.lightblue,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  logintext: {
    fontFamily: fonts.Thin,
    fontWeight: '400',
    fontSize: 20,
    color: colors.black,
    lineHeight: 20
  },
  inputContainer: {
    height: normalize(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
  },
  buttoncontainer: {
    flexDirection: 'row',
    width: width - 60,
    height: normalize(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: 20,
  },
  bluecircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    marginLeft: 100,
    alignItems: 'center',
    padding: 6,
    justifyContent: "center"
  },
  imagecontainer: {
    height: 76,
    width: 76,
    borderRadius: normalize(50),
    // borderWidth: 1,
    borderColor: colors.lightblue,
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: -60,
    alignSelf: 'center',
    padding: 5,
    justifyContent: "center"
  },
  cameracontainer: {
    // height: normalize(24),
    // width: normalize(24),
    borderRadius: normalize(30),
    // borderWidth: 1,
    borderColor: colors.lightblue,
    backgroundColor: '#ffff',
    alignItems: 'center',
    position: "absolute",
    alignSelf: "center",
    top: normalize(-9),
    padding: 6,
    left: width * 0.45
  },
  dots: {
    backgroundColor: colors.black,
    height: 4,
    width: 4,
    borderRadius: 4,
    alignSelf: 'center',
    marginLeft: 10,
  },
  linebtwcircles: {
    borderBottomColor: colors.black,
    width: 90,
    borderBottomWidth: 1,
    height: 1,
    alignSelf: 'center',
  },
  textInput: {
    fontSize: 14,
    fontFamily: fonts.Light,
    fontWeight: "400",
    lineHeight: 16,
    color: colors.white,
    height: normalize(46),
  },
  buttonText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    lineHeight: 18.4,
    color: colors.primary
  },
  forgotText: {
    fontFamily: fonts.Light,
    fontWeight: "400",
    color: colors.white,
    fontSize: 14,
    lineHeight: 16
  },
  indicatorText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Medium,
    fontWeight: "400",
    lineHeight: 18
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});
