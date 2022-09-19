import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {normalize} from '../../utils/normalizeHeightwidth';

export const styles = StyleSheet.create({
  loginview: {
    marginTop: normalize(70),
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
    borderBottomColor: 'white',
    paddingBottom: 5,
  },
  buttoncontainer: {
    flexDirection: 'row',
    width: normalize(300),
    height: normalize(40),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: 35,
  },
  bluecircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
borderColor:colors.lightblue,
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
});
