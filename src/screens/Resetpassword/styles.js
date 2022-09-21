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
    marginTop: normalize(50),
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
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    paddingBottom: 8,
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
    marginTop: 40,
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
    flex: 1,
    height: normalize(46),
  },
  buttonText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    lineHeight: 18.4,
    color: colors.primary
  },
  descText: {
    marginTop: 14,
    fontFamily: fonts.Light,
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 22,
    color: colors.white
  },
});
