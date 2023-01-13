import { StyleSheet } from "react-native";
import PizzaTranslator from "../demo/InputTextDemo";
import FlatListBasic from "../components/list/FlatListBasic";
import { View, Text } from "../components/Themed";


export default function MinerScreen() {
    return (
        <View style={styles.container}>
            

            <PizzaTranslator />
            <FlatListBasic />
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