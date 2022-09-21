import { StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  imagecontainer: {
    height: 72,
    width: 72,
    borderRadius: 36,
    // borderWidth: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    marginTop: 0,
    alignSelf: 'center',
    padding: 2,
  },
  cameracontainer: {
    height: normalize(29),
    width: normalize(29),
    borderRadius: normalize(30),
    backgroundColor: colors.primary,
    alignItems: 'center',
    position: 'absolute',
    top: normalize(38),
    padding: 8,
    left: normalize(205),
    justifyContent: "center"
  },
  profileNametext: {
    textAlign: 'center',
    fontFamily: fonts.Bold,
    fontSize: 16,
    color: colors.primary,
    marginTop: 12,
    lineHeight: 18
  },
  profiletext: {
    textAlign: 'center',
    fontFamily: fonts.Medium,
    fontWeight: '400',
    fontSize: 14,
    color: colors.black,
    marginTop: 4
  },
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
  straightLine: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightblue,
  },
  myprofiletextinput: {
    fontFamily: fonts.Medium,
    fontWeight: '400',
    fontSize: 12,
    marginTop: 17,
    lineHeight: 13.99,
    color: colors.black,
    marginBottom: 6
  },
  textInput: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 16.32,
    color: colors.black,
    marginBottom: 7
  },
  buttonText: {
    fontFamily: fonts.Bold,
    fontSize: 16,
    lineHeight: 18.4,
    color: colors.white
  },
});
