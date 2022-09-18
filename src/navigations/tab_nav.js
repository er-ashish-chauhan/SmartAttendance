import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerActions } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import Dashboard from "../screens/Dashboard";
import Leaves from "../screens/Leaves";
import Reports from "../screens/Reports";
import colors from "../utils/colors";
import fonts from "../utils/fonts";
import images from "../utils/images";

const Tab = createBottomTabNavigator();

export function TabNavigation(props) {

  const tabBaroptions = {
    tabBarActiveTintColor: colors.lightblue,
    tabBarInactiveTintColor: "#666666",
    tabBarLabelStyle: {
      fontSize: 12, fontFamily: fonts.Medium
    },
    tabBarStyle: {
      backgroundColor: "#FFFFFF",
    },
    tabBarHideOnKeyboard: true,
    adaptive: false,
    headerShown: false
  };

  return (
    <Tab.Navigator
      screenOptions={tabBaroptions}
    >
      <Tab.Screen
        name={"Home"}
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              source={images.homeicon}
              style={{ height: 20, width: 20, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Attendance"}
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              source={images.attendanceicon}
              style={{ height: 20, width: 20, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Leaves"}
        component={Leaves}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              source={images.leavesicon}
              style={{ height: 20, width: 20, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"Reports"}
        component={Reports}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              source={images.reportsicon}
              style={{ height: 20, width: 20, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"More"}
        component={Dashboard}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            navigation.dispatch(DrawerActions.toggleDrawer());
            e.preventDefault();
          },
        })}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              resizeMode="contain"
              source={images.moreicon}
              style={{ height: 20, width: 20, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )

}
