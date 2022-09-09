import React from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { colors } from '../../utils'
import images from '../../utils/images'
import { normalize } from '../../utils/normalizeHeightwidth'



const AppTextInput = (props) => {
  const {
    placeHolder,
    placeholderTextColor,
    value,
    autoCapitalize,
    textColor,
    onChangeText,
    onSubmitEditing,
    keyboardType,
    secureTextEntry,
    returnKeyType,
    autoFocus,
    containerStyle,
    inputContainer,
    editable,
    textStyle,
    maxLength,
    ismaxLength,
    multiline,
    onFocus,
    isShowIcon,
    onClickShow,
    onKeyPress,
    lableImage
  } = props
  return (
    <View style={containerStyle}>
        <Text>hfkghjhkjhvhklvjbh</Text>
      <TouchableOpacity disabled={editable} onPress={onFocus}>
        <View style={[styles.container, inputContainer]}>
          {lableImage ? (
            <View style={styles.lableImagestyle}>
              <Image style={styles.imagestyle} source={lableImage} resizeMode="contain" />
            </View>
          ) : null}
          <TextInput
            maxLength={!ismaxLength ? maxLength : null}
            value={value}
            onChangeText={onChangeText}
            autoCapitalize={autoCapitalize}
            placeholder={placeHolder}
            multiline={multiline}
            {...(keyboardType !== null && { keyboardType })}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid="transparent"
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            allowFontScaling={false}
            style={[styles.input, textStyle, { color: textColor }]}
            onSubmitEditing={onSubmitEditing}
            editable={editable}
            autoFocus={autoFocus}
            blurOnSubmit={false}
            onKeyPress={onKeyPress}
          />
          {isShowIcon && (
            <TouchableOpacity style={styles.touchstyle} onPress={() => onClickShow()}>
              {secureTextEntry ? (
                <Image style={styles.imagestyle} source={images.hidden_eyes} resizeMode="contain" />
              ) : (
                <Image style={styles.imagestyle} source={images.show_eyes} resizeMode="contain" />
              )}
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AppTextInput

const styles = StyleSheet.create({
  container: {
    width: normalize(90),
    height: normalize(12),
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal:5,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  input: {
    flex: 1,
    fontSize: normalize(3.5),
    color: colors.black,
    height: normalize(15),
    justifyContent: 'center',
    width: '80%',
    paddingLeft: 15
  },
  imagestyle: {
    width: normalize(4),
    height: normalize(4),
    alignContent: 'flex-end'
  },
  touchstyle: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'flex-end'
  },
  lableImagestyle: {
    paddingLeft: 10
  }
})
