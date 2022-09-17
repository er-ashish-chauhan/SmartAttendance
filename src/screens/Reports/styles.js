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
    height: normalize(60),
    borderWidth: 1,
    borderColor: colors.lightblue,
justifyContent:"space-between",
    marginTop:normalize(50),
    borderRadius: normalize(10),
    flexDirection: 'row',
    padding: normalize(20),
    marginHorizontal:normalize(30)
  },
  cardcontainer:{
    height:normalize(90),
    width:normalize(150),
    borderWidth: 1,
    borderColor: colors.lightblue,
    borderRadius: normalize(10),
  },
  bluecircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    alignSelf: 'center',
    padding: 6,
    marginTop:20
  },

});
