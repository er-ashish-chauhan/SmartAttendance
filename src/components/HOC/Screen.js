import React, { useRef, useState } from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import colors from "../../utils";
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
    defaultLanguage = ""
}) => {
    const [stateChange, setStateChanged] = useState(false);


    return (
        <View style={{ flex: 1, backgroundColor: colors.light, }}>
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