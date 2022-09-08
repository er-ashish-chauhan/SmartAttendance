import React from "react";
import {
    View,
    Text
} from "react-native";

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from "../screens/Splash";
import LoginScreen from "../screens/Login";

const Stack = createStackNavigator();

export default StackNavigator = () => {

    const userData = false;


    return (
        <Stack.Navigator
            screenOptions={{
                gestureDirection: "horizontal",
                headerMode: "screen",
                headerShown: false
            }}>
            {userData ? (
                <>
                    <Stack.Screen name="Splash" component={SplashScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
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