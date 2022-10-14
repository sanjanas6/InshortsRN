import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex:1,
        backgroundColor: "grey",
        paddingTop: Platform.OS === "android" ? 36 : 0
    }
})