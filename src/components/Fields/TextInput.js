/**
 * Custom TextInput Component
 *
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput as RNTextInput } from 'react-native';

import Text from './Text';
import { commonStyles, typography } from '../../styles';
import { colors } from '../../utils';

const TextInput = ({
  textInputRef,
  label,
  hint,
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  maxLength,
  autoCapitalize,
  multiline,
  editable = true,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
  required,
  style,
  onTouchStart,
  contextMenu = false,
  ...rest
}) => {
  return (
    <View style={[commonStyles.formControl, style]} {...rest}>
      {(label || hint) && (
        <Text style={[typography.label, { color: colors.black }]}>
          {label}{' '}
          {required && (
            <Text style={[typography.caption2, { color: colors.danger }]}>*</Text>
          )}
          {
            <Text style={[typography.caption2, { color: colors.darkGray }]}>
              {' '}
              {hint}
            </Text>
          }
        </Text>
      )}
      <RNTextInput
        style={[
          multiline && styles.multilineTextInput,
          styles.textInput,
          !editable && { backgroundColor: colors.steelGray },
        ]}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        multiline={multiline}
        editable={editable}
        placeholder={placeholder ?? label}
        placeholderTextColor={colors.placeholder}
        autoCapitalize={autoCapitalize}
        selectionColor={colors.primary}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        ref={textInputRef}
        onTouchStart={onTouchStart}
        contextMenuHidden={contextMenu}

      />
    </View>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
};

export default memo(TextInput);

const styles = StyleSheet.create({
  textInput: {
    // borderWidth: 0.2,
    borderRadius: 8,
    borderColor: colors.gray_9da1a1,
    padding: 15,
    paddingRight: 0,
    backgroundColor: colors.white,
    ...typography.body1,
    fontSize: 18,
    lineHeight: 22
  },
  multilineTextInput: {
    height: 70,
    marginBottom: 5,
    borderWidth: 0.5,
    padding: 5,
    textAlignVertical: 'top',
  },
});
