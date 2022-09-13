import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import {normalize} from '../../utils/normalizeHeightwidth';

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
  
});
