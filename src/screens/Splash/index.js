import React from "react";
import {
    View,
    Text
} from "react-native";

const SplashScreen = ({
    navigation
}) => {
    return (
        <View style={{
           alignItems: "center",
           justifyContent: "center"
        }}>
            <Text style={{
                fontWeight: "600",
                fontSize: 17
            }}>Here! You're on splash</Text>
        </View>
    )
}

export default SplashScreen;