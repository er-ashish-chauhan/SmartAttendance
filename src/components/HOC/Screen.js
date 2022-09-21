import React, { useRef, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import translations from '../../locales';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import images from '../../utils/images';
import {
  normalize,
  normalizeMax
} from '../../utils/normalizeHeightwidth';
// import CustomHeader from "../customHeader";

const hitSlop = {
  top: 15,
  left: 15,
  right: 15,
  bottom: 15
}

const customHeaderWithoutTitle = (
  backIcon,
  backnavigation,
  backloginIcon,
  leftblueimage,
  rightblueimage
) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {backIcon && (
        <TouchableOpacity onPress={backnavigation}>
          <Image
            source={images.leftarrow}
            style={{
              marginTop: normalize(50),
              marginLeft: normalize(24),
            }}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      )}
      {backloginIcon && (
        <TouchableOpacity
          onPress={backnavigation}>
          <Image
            source={images.loginleftarrow}
            style={{
              marginTop: normalize(50),
              marginLeft: normalize(24),
            }}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      )}
      {leftblueimage && (
        <Image
          source={images.lightblueborder}
          style={{
            alignSelf: 'flex-start',
            height: normalize(100),
            width: normalize(90),
            zIndex: 999
          }}
          resizeMode="contain"></Image>
      )}
      {rightblueimage && (
        <Image
          source={images.rightblueborder}
          style={{
            alignSelf: 'flex-end',
            height: normalize(80),
            width: normalize(70),
            position: 'relative',
          }}
          resizeMode="contain"></Image>
      )}
    </View>
  )
}

const isStatusBarHide = () => {
  return
}

const ScreenHOC = ({
  type = 'primary',
  barStyle = 'dark-content',
  bottomSafeArea,
  children,
  containerStyle = {},
  safeAreaRequired = false,
  backIcon = true,
  leftblueimage,
  rightblueimage = false,
  showcalenderimage = true,
  showrightbluebox = false,
  title = true,
  calendartext = translations["APP_NAME"],
  backloginIcon = false,
  backnavigation,
  customHeader = false,
  customHeaderHeading = '',
  showHeaderWithoutTitle = false,
  backgroundColor = colors.light,
  dashboardHeader = false,
  navigation,
  showClearAll = false
}) => {
  const [stateChange, setStateChanged] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: backgroundColor }}>
      {!!safeAreaRequired && (
        <SafeAreaView
          style={{
            backgroundColor: colors.white
          }}
        />
      )}

      {
        <StatusBar
          backgroundColor={
            type == 'primary' ? colors.white : colors.primary_7c2529
          }
          animated
          barStyle={barStyle}
          hidden={showHeaderWithoutTitle ? true : false}
        />
      }
      {customHeader && (
        <View style={{ backgroundColor: colors.white, paddingTop: 5 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: normalize(18),
            }}>
            {backIcon && (
              <TouchableOpacity
                hitSlop={hitSlop}
                activeOpacity={.6}
                onPress={backnavigation}
                style={{
                  flex: 0,
                  alignItems: 'flex-start',
                }}>
                <Image
                  source={images.leftarrow} style={{
                    height: 16,
                    width: 21
                  }}
                  resizeMode="contain" />
              </TouchableOpacity>
            )}
            <View style={{
              flex: 1,
              alignItems: "center",
              paddingLeft: showClearAll ? 30 : 0,
            }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: fonts.Medium,
                  fontWeight: "400",
                  color: colors.black,
                  lineHeight: 18.66,
                }}>
                {customHeaderHeading}
              </Text>
            </View>
            {showClearAll ? (
              <TouchableOpacity
                hitSlop={hitSlop}
                activeOpacity={.6}
                style={{}}>
                <Text style={{
                  fontSize: 14,
                  fontFamily: fonts.Medium,
                  fontWeight: "400",
                  color: colors.danger,
                  lineHeight: 16.32,
                }}>Clear All</Text>
              </TouchableOpacity>
            ) : (
              <View style={{ flex: backIcon ? 0.09 : 0 }} />
            )}
          </View>

          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: 'rgba(83, 225, 208,0.4)',
              marginTop: normalize(20),
            }}
          />
        </View>
      )}
      {showHeaderWithoutTitle && customHeaderWithoutTitle(
        backIcon,
        backnavigation,
        backloginIcon,
        leftblueimage,
        rightblueimage
      )}

      {dashboardHeader && (
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: Platform.OS == "ios" ? normalizeMax(25) : normalize(27)
          // marginHorizontal: normalize(24),
        }}>
          <View style={{
            flex: 1,
            alignItems: "center",
          }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: fonts.Medium,
                lineHeight: 22,
                color: colors.black,
                fontWeight: "400",
                marginTop: Platform.OS == "ios" ? normalizeMax(20) : normalize(20)
              }}>
              {customHeaderHeading}
            </Text>
          </View>
          <View style={{
            position: "absolute",
            right: 0,
          }}>
            <ImageBackground source={images.rightblueborder} style={{
              height: Platform.OS == "ios" ? normalizeMax(90) : normalize(100),
              width: Platform.OS == "ios" ? normalizeMax(90) : normalize(100)
            }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Notification")}
                style={{
                  justifyContent: "flex-end",
                  marginTop: Platform.OS == "ios" ? normalize(54) : normalize(50),
                  alignSelf: "flex-end",
                  marginRight: normalize(32)
                }}>
                <Image source={images.bell} style={{
                  width: 16,
                  height: 22
                }}
                  resizeMode="contain"></Image>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      )}

      <View style={{ flex: 1, ...containerStyle, borderWidth: 0, }}>
        {showcalenderimage && (
          <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
            {showcalenderimage && (
              <Image
                source={images.calendar}
                style={{
                  height: normalize(114),
                  width: normalize(114),
                  alignItems: 'center',
                  marginLeft: normalize(131),
                }}
              />
            )}
            {title && (
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: normalize(17),
                  fontFamily: fonts.Bold,
                  fontSize: 22,
                  color: colors.black
                }}>
                {calendartext}
              </Text>
            )}
          </View>
        )}
        {children}
      </View>
      {!!bottomSafeArea && <SafeAreaView style={{ backgroundColor: 'white' }} />}
    </View>
  );
};

export default ScreenHOC;
