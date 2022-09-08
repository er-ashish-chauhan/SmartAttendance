import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

export default commonStyles = StyleSheet.create({
  formControl: {
    marginVertical: 6,
  },
  activeTab: {
    flexDirection: 'column',
    backgroundColor: colors.primary,
  },
  inactiveTab: {
    flexDirection: 'column',
    backgroundColor: colors.gray,
  },
  divider: {
    marginVertical: 10,
    borderWidth: 0.6,
    borderColor: colors.light,
    width: "100%"
  }
});
