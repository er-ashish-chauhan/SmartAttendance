import { StyleSheet,
Dimensions } from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import { normalize } from '../../utils/normalizeHeightwidth';

const {
  width
} = Dimensions.get("window");

export const styles = StyleSheet.create({
  selectAttendance: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: normalize(30)
  },
  straightLine: {
    height: 1,
    width: '100%',
    backgroundColor: colors.lightblue,
  },
  flexFull: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 25
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center"
    //  width: '50%' ,
    //  alignItems:'flex-end'
  },
  buttoncontainer: {
    flexDirection: 'row',
    width: width - 60,
    height: normalize(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightblue,
    borderRadius: 30,
    marginTop: 40
  },
  buttoncontainer2: {
    flexDirection: 'row',
    width: width - 60,
    height: normalize(45),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: 30,
    marginTop: 25,
    flexDirection: 'row',
  },
  addTxt: {
    color: colors.lightblue,
    fontSize: 14,
    fontWeight: '900',
    lineHeight: 16,
    fontFamily: fonts.Medium,
  },
  dropdownView: {
    backgroundColor: '#fff',
    borderWidth: 0,
    paddingHorizontal: -10
  },
  arrowIconsty: {
    width: 25,
    arrowColor: '#fff',
    height: 25,
  },
  textArea: {
    marginTop: normalize(26),
    borderWidth: 1,
    borderColor: colors.lightblue,
    height: normalize(133),
    borderRadius: 10,
    paddingHorizontal: 13
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
  },
  textInput: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 16.32,
    color: colors.black,
  },
  dateStyle: {
    fontFamily: fonts.Medium,
    fontSize: 14,
    lineHeight: 16.32,
    color: colors.black,
  }
});
