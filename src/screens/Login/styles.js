import {
  StyleSheet,
  Dimensions
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

const {
  width,
  height
} = Dimensions.get("window");

export const styles = StyleSheet.create({
  loginview: {
    marginTop: normalize(27),
    backgroundColor: colors.lightblue,
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  logintext: {
    fontFamily: fonts.Thin,
    fontWeight: '400',
    fontSize: 22,
    color: '#FFFFFF',
  },
  inputContainer: {
    height: normalize(30),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttoncontainer: {
    flexDirection: 'row',
    width: width - 60,
    height: normalize(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: 34
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  languageLable: {
    fontFamily: fonts.Medium,
    fontWeight: "400",
    color: colors.primary,
    fontSize: 14,
    lineHeight: 16.32,
    marginRight: 5
  },
  textInput: {
    height: normalize(46),
    fontSize: 14,
    fontFamily: fonts.Light,
    fontWeight: "400",
    lineHeight: 16,
    color: colors.white,
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
  }
});
