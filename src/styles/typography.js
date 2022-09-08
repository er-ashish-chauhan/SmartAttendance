import {StyleSheet, Dimensions, PixelRatio} from 'react-native';

import colors from '../utils/colors';
import { fonts } from '../utils/fonts';

export default typography = StyleSheet.create({
  h1: {
    fontSize: 30,
    // fontFamily: 'Roboto-Bold',
    color: colors.darkGray,
    // lineHeight: 30,
  },
  h2: {
    fontSize: 26,
    // fontFamily: 'Roboto-Bold',
    color: colors.darkGray,
    lineHeight: 26,
  },
  h3: {
    fontSize: 24,
    // fontFamily: 'Roboto-Bold',
    color: colors.darkGray,
    lineHeight: 24,
  },
  h4: {
    fontSize: 22,
    // fontFamily: 'Roboto-Bold',
    color: colors.black,
    lineHeight: 22,
  },
  h5: {
    fontSize: 20,
    // fontFamily: 'Roboto-Bold',
    color: colors.black,
  },
  h6: {
    fontSize: 17,
    // fontFamily: 'Roboto-Bold',
    color: colors.darkGray,
  },
  display1: {
    fontSize: 42,
    // fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display2: {
    fontSize: 32,
    // fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display3: {
    fontSize: 28,
    // fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  display4: {
    fontSize: 22,
    // fontFamily: 'Roboto-Regular',
    color: colors.gray,
  },
  headline: {
    fontSize: 21,
    fontFamily: fonts.Bold,
    color: colors.darkGray,
    lineHeight: 24,
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.Bold,
    color: colors.primary,
    lineHeight: 22,
  },
  subheading: {
    fontSize: 17,
    // fontFamily: 'Roboto-Bold',
    color: colors.darkGray,
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    // fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.black,
  },
  placeholder: {
    fontSize: 17,
    // fontFamily: 'Roboto-Regular',
    color: colors.placeholder,
  },
  body1: {
    fontSize: 15,
    fontFamily: fonts.SemiBold,
    color: colors.black,
    lineHeight: 20,
  },
  body2: {
    fontSize: 15,
    fontFamily: fonts.Medium,
    color: colors.black,
    lineHeight: 20,
  },
  caption1: {
    fontSize: 15,
    // fontFamily: 'Roboto-Regular',
    color: colors.darkGray,
    lineHeight: 20,
  },
  caption2: {
    fontSize: 13,
    // fontFamily: 'Roboto-Regular',
    color: colors.black,
    opacity: 0.8,
    lineHeight: 20,
  },
  buttonPrimary: {
    fontSize: 19,
    // fontFamily: 'Roboto-Bold',
    lineHeight: 23,
  },
  buttonSecondary: {
    fontSize: 18,
    // fontFamily: 'Roboto-Regular',
    fontWeight: '400',
    color: colors.darkGray,
    lineHeight: 23,
  },
  textButton: {
    fontSize: 17,
    // fontFamily: 'Roboto-Regular',
    color: colors.black,
  },
});
