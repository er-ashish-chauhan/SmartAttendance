import * as React from 'react';
import {
    Dimensions,
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './stack_nav';
import images from '../utils/images';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
const hitSlop = {
    top: 15,
    right: 15,
    left: 15,
    bottom: 15
}

const {
    height,
    width
} = Dimensions.get("window");


const Drawer = createDrawerNavigator();

export default DrawerNavigator = () => {
    return (
        <Drawer.Navigator

            screenOptions={{
                headerShown: false,
                drawerPosition: "right",
                drawerType: "front",
                // overlayColor: "#e4f2fd",
                drawerStyle: {
                    width: 225,
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.1,
                    shadowRadius: 15,
                    elevation: 5,
                },
                swipeEnabled: false
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="Home" component={StackNavigator} />
            {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between"
            }}
            style={{
                height: height,
            }}
            {...props}>
            <View style={{
                flex: 1,
            }}>
                <TouchableOpacity
                    hitSlop={hitSlop}
                    opacity={0.6}
                    style={{
                        marginLeft: 15,
                    }}
                    onPress={() => props.navigation.closeDrawer()}>
                    <Icon name="close" size={30} color={colors.primary} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => props.navigation.navigate("Profile")}
                    style={[styles.flexRow,
                    { marginTop: 17, marginLeft: 26, marginRight: 10 }]}>
                    <View style={{
                        width: 50
                    }}>
                        <Image
                            source={images.userProfile}
                            style={{
                                width: 48,
                                height: 48
                            }}
                        />
                    </View>
                    <View style={{
                        marginLeft: 7,
                        flexDirection: "column",
                        flex: 0.85,
                    }}>
                        <Text style={styles.usernameStyle}>{"John Doe"}</Text>
                        <Text style={[styles.usernameStyle, { fontSize: 12, marginTop: 4 }]}>{"#1234567"}</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.divider} />
                <View style={{ marginHorizontal: 26 }}>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            marginBottom: 17
                        }}
                        onPress={() => props.navigation.navigate("LeaveApplication")}>
                        <Text style={styles.lableStyle}>
                            Apply Leave
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            marginBottom: 17
                        }}
                        onPress={() => props.navigation.navigate("EmployDetails")}>
                        <Text style={styles.lableStyle}>
                            Employement Details
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            marginBottom: 17
                        }}
                        onPress={() => props.navigation.navigate("Settings")}>
                        <Text style={styles.lableStyle}>
                            Settings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            marginBottom: 17
                        }}
                        onPress={() => props.navigation.navigate("ContactUs")}>
                        <Text style={styles.lableStyle}>
                            Contact Us
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            marginBottom: 17
                        }}
                        onPress={() => props.navigation.navigate("AboutUs")}>
                        <Text style={styles.lableStyle}>
                            About Us
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={{
                            // marginBottom: 17
                        }}
                        onPress={() =>  props.navigation.navigate("Faqs")}>
                        <Text style={styles.lableStyle}>
                            FAQ
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        hitSlop={hitSlop}
                        opacity={0.6}
                        style={[styles.flexRow, {
                            marginTop: 26
                        }]}
                        onPress={() => props.navigation.navigate("Login")}>
                        <Image 
                            source={images.logout}
                            resizeMode="contain"
                            style={{
                                height: 16,
                                width: 16
                            }}
                        />
                        <Text style={[styles.lableStyle, { color: colors.danger, marginLeft: 7 }]}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                alignItems: "center",
                justifyContent: "flex-end",
                bottom: 40,
            }}>
                <Image
                    source={images.calendar}
                    style={{
                        width: 96,
                        height: 96,
                        opacity: 0.4
                    }}
                />
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    lableStyle: {
        fontSize: 16,
        fontFamily: fonts.Medium,
        lineHeight: 18.66,
        color: colors.black
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    usernameStyle: {
        fontSize: 14,
        fontFamily: fonts.Medium,
        lineHeight: 16.32,
        color: colors.black,
        flexWrap: "wrap",
    },
    divider: {
        marginVertical: 17,
        height: 1,
        backgroundColor: colors.gray_e5e5e5,
    }
})