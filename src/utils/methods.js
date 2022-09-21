import React from "react";
import Toast from 'react-native-simple-toast';

export const showLongToast = (text) => {
    return (
        Toast.show(text,
            // Toast.LONG,
            Toast.BOTTOM)
    )
}

export const showShortToast = (text) => {
    return (
        Toast.show(text,
            // Toast.SHORT,
            // Toast.BOTTOM
        )
    )
}