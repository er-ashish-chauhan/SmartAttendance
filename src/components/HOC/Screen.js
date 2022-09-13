import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../../utils/colors';
import fonts from '../../utils/fonts';
import images from '../../utils/images';
import {normalize} from '../../utils/normalizeHeightwidth';
// import CustomHeader from "../customHeader";

const ScreenHOC = ({
  type = 'primary',
  barStyle = 'dark-content',
  bottomSafeArea,
  children,
  containerStyle = {},
  showBellIcon = true,
  headerContainerStyle,
  headerLeft,
  headerRight,
  headerTitle,
  onBackPress,
  safeAreaRequired = true,
  showBackIcon = false,
  showHeader = false,
  statusBarColor = 'white',
  statusBarRequired = true,
  titleStyle,
  showMenuIcon,
  onSelectDate,
  onRightPress,
  changeFilter,
  showFilter,
  rightText,
  backIcon = true,
  navigation,
  languageHandler = '',
  showLanguageDropdown = false,
  defaultLanguage = '',
  leftblueimage,
  rightblueimage = false,
  showcalenderimage = true,
  showrightbluebox = false,
  title = true,
  calendartext = 'Smart Attendance',
  backloginIcon = false,
  backnavigation,
  customHeader=false,
  customHeaderHeading=""
}) => {
  const [stateChange, setStateChanged] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: colors.light}}>
        {customHeader &&
        <View>
        <View style={{flexDirection:"row",marginTop: normalize(60),
        marginLeft: normalize(24)}}>
            <TouchableOpacity onPress={backnavigation} style={{alignItems:"flex-start"}}>
            <Image
              source={images.leftarrow}/>
            </TouchableOpacity>
            <Text style={{alignItems:"center",fontSize:16,marginLeft:normalize(110)}}>
                {customHeaderHeading}
            </Text>
            </View>
            <View style={{borderBottomWidth:0.5,borderBottomColor:"rgba(83, 225, 208,0.4)",marginTop:normalize(20)}}/>
        </View>
        }
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        {backIcon && (
          <TouchableOpacity onPress={backnavigation}>
            <Image
              source={images.leftarrow}
              style={{
                marginTop: normalize(50),
                marginLeft: normalize(24),
              }}></Image>
          </TouchableOpacity>
        )}
        {backloginIcon && (
          <TouchableOpacity onPress={backnavigation}>
            <Image
              source={images.loginleftarrow}
              style={{
                marginTop: normalize(50),
                marginLeft: normalize(24),
              }}></Image>
          </TouchableOpacity>
        )}
        {leftblueimage && (
          <Image
            source={images.lightblueborder}
            style={{
              alignSelf: 'flex-start',
              height: normalize(100),
              width: normalize(90),
            }}></Image>
        )}
        {rightblueimage && (
          <Image
            source={images.rightblueborder}
            style={{
              alignSelf: 'flex-end',
              height: normalize(80),
              width: normalize(70),
              position: 'relative',
            }}></Image>
        )}
      </View>
      <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
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
            }}>
            {calendartext}
          </Text>
        )}
        {/* {showrightbluebox&& <Image source={images.smallbluebox} style={{alignSelf:"flex-end",marginTop:90}}/> } */}
      </View>

      {!!safeAreaRequired && (
        <SafeAreaView
          style={{
            backgroundColor:
              type == 'primary' ? colors.light : colors.primary_7c2529,
          }}
        />
      )}

      {
        <StatusBar
          backgroundColor={
            type == 'primary' ? colors.light : colors.primary_7c2529
          }
          animated
          barStyle={barStyle}
        />
      }

      {/* <CustomHeader
                defaultLocalLanguage={defaultLanguage}
                showBackIcon={showBackIcon}
                title={headerTitle}
                showLanguageDropdown={showLanguageDropdown}
                showBellIcon={showBellIcon}
                onLanguageChange={languageHandler}
                onBackPress={() => navigation.goBack()}
                onRightPress={() => navigation.navigate("Settings")} /> */}
      <View style={{flex: 1, ...containerStyle, borderWidth: 0}}>
        {children}
      </View>
      {!!bottomSafeArea && <SafeAreaView style={{backgroundColor: 'white'}} />}
    </View>
  );
};

export default ScreenHOC;
