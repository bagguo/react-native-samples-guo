import { StyleSheet } from "react-native";
import ScrollViewDemo from "../demo/ScrollViewDemo";
import ScrollViewDemo2 from "../demo/ScrollViewDemo2";
import { View, Text } from "../components/Themed";


export default function TabSettingScreen() {
    return (
        <View style={styles.container}>
            {/* <ScrollViewDemo2 /> */}
            <ScrollViewDemo />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});