import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, Image } from 'react-native';
import colors from "../../utils/colors"
import fonts from '../../utils/fonts';
import images from '../../utils/images';
import { normalize } from '../../utils/normalizeHeightwidth';
// import CustomHeader from "../customHeader";

const ScreenHOC = ({
    type = "primary",
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
    backIcon,
    navigation,
    languageHandler = "",
    showLanguageDropdown = false,
    defaultLanguage = "",
    leftblueimage,
    rightblueimage,
    showcalenderimage=true,
    showrightbluebox=false,
    calendartext="Smart Attendance"
}) => {
    const [stateChange, setStateChanged] = useState(false);


    return (
        <View style={{ flex: 1, backgroundColor: colors.light, }}>
     
            {leftblueimage && <Image source={images.lightblueborder} style={{alignSelf:"flex-start",height:normalize(100),width:normalize(90)}}></Image>}
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
            {showcalenderimage && <Image source={images.calendar} style={{height:normalize(114),width:normalize(114),alignItems:"center",marginLeft:normalize(131)}}/>}
            <Text style={{alignSelf:"center",marginTop:normalize(17),fontFamily:fonts.Bold,fontSize:22}}>{calendartext}</Text>
            {/* {showrightbluebox&& <Image source={images.smallbluebox} style={{alignSelf:"flex-end",marginTop:90}}/> } */}
            
            </View>
            
            {!!safeAreaRequired && <SafeAreaView style={{ backgroundColor: type == "primary" ? colors.light : colors.primary_7c2529, }} />}
           
            {<StatusBar backgroundColor={type == "primary" ? colors.light : colors.primary_7c2529} animated barStyle={barStyle} />}
            
            {/* <CustomHeader
                defaultLocalLanguage={defaultLanguage}
                showBackIcon={showBackIcon}
                title={headerTitle}
                showLanguageDropdown={showLanguageDropdown}
                showBellIcon={showBellIcon}
                onLanguageChange={languageHandler}
                onBackPress={() => navigation.goBack()}
                onRightPress={() => navigation.navigate("Settings")} /> */}
            <View style={{ flex: 1, ...containerStyle, borderWidth: 0 }}>
                {children}
            </View>
            {!!bottomSafeArea && <SafeAreaView style={{ backgroundColor: 'white', }} />}
        </View>)
};


export default ScreenHOC;