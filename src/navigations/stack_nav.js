import React from "react";
import {
    View,
    Text
} from "react-native";

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SplashScreen from "../screens/Splash";
import LoginScreen from "../screens/Login";
import SignUp from "../screens/Signup";

const Stack = createStackNavigator();

export default StackNavigator = () => {

    const userData = true;


    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                gestureDirection: "horizontal",
                // ...TransitionPresets.SlideFromRightIOS,
                // headerMode: "screen",
                
                  headerShown: false,
            }}>
            {userData ? (
                <>
                    <Stack.Screen 
                    name="Splash" 
                    component={SplashScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Signup" component={SignUp} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                </>
            )}

        </Stack.Navigator>
    );
}

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}