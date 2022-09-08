import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { colors } from "../../utils";

const { width, height } = Dimensions.get("window");

export default CustomCard = ({
    children,
    style
}) => {
    return (
        <View style={[{ ...styles.card }, style]}>
            <View style={{}}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignSelf: "center",
        backgroundColor: colors.white,
        width: width - 40,
        borderRadius: 20,
        padding: 15,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2
    }
})