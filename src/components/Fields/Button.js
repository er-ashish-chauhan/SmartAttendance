/**
 * Custom Button Component
 *
 */
import React, { memo } from 'react';
import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native';

import Text from './Text';
import { typography } from '../../styles';
import { colors } from '../../utils';

const Button = ({
  children,
  variant,
  icon,
  leftIcon,
  onPress,
  style,
  textStyle,
  activeOpacity,
  disabled,
  ...rest
}) => {
  let buttonStyle = {};
  let txtStyle = {};

  if (variant == null || variant == 'primary') {
    buttonStyle = { ...styles.buttonPrimary };
    txtStyle = { ...styles.buttonPrimaryText };
  }

  buttonStyle = { ...buttonStyle, ...style };
  txtStyle = { ...txtStyle, ...textStyle };

  return (
    <TouchableOpacity
      onPress={() => {
        Keyboard.dismiss();
        if (onPress) {
          setTimeout(onPress, 100);
        }
      }}
      hitSlop={{ top: 7, bottom: 7, left: 7, right: 7 }}
      style={[styles.container, buttonStyle, { borderRadius: 2 }]}
      disabled={disabled}
      activeOpacity={activeOpacity ?? 0.4}
      {...rest}>
      {leftIcon}
      <Text style={txtStyle}>{children}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: colors.buttonBGColor,
    marginVertical: 15,
    height: 48,
    borderRadius: 2,
  },
  buttonPrimaryText: {
    ...typography.buttonPrimary,
    color: colors.white,
  },
});
