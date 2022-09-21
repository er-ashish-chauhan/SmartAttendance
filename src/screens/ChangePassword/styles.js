import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {normalize} from '../../utils/normalizeHeightwidth';
export const styles = StyleSheet.create({
  // straightLine: {
  //   height: 1,
  //   width: '100%',
  //   backgroundColor: colors.lightblue,
  // },
  buttoncontainer: {
    flexDirection: 'row',
    width: normalize(330),
    height: normalize(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0079FF',
    borderRadius: 30,
    marginTop: 45,
  },
  eyeImgSty: {
    width: normalize(16),
    height: normalize(16),
    // position: 'absolute',
    // alignSelf: 'flex-end',
    // top: 20,
    // right: 10,
  },
  textInput: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 16.32,
    color: colors.black,
    flex: 1
  },
  buttonText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    lineHeight: 18.4,
    color: colors.white
  },
  inputContainer: {
    // height: normalize(30),
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightblue,
    paddingBottom: 8,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: normalize(27)
  },
});
