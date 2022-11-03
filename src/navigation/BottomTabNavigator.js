
import { useColorScheme } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Ionicons from "@expo/vector-icons/Ionicons";

import TabWalletScreen from "../screens/TabWalletScreen";
import TabMinerScreen from "../screens/TabMinerScreen";
import TabSettingScreen from "../screens/TabSettingScreen";
import Colors from "../constants/Colors";


const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="TabWallet"
            screenOptions={{ tabBarActivityTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="Wallet"
                component={TabWalletNavigator}
                options={{ tabBarIcon: makeIconRender("home") }}
            />

            <BottomTab.Screen
                name="Miner"
                component={TabMinerNavigator}
                options={{ tabBarIcon: makeIconRender("devices") }}
            />

            <BottomTab.Screen
                name="Setting"
                component={TabSettingNavigator}
                options={{ tabBarIcon: makeIconRender("cog") }}
            />

        </BottomTab.Navigator>
    );
}

function makeIconRender(name) {
    return ({ color, size }) => (
        <MaterialCommunityIcons name={name} color={color} size={size} />
    );
}

function TabBarIcon(props) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabWalletStack = createStackNavigator();

function TabWalletNavigator() {
    return (
        <TabWalletStack.Navigator>
            <TabWalletStack.Screen
                name="TabWalletScreen"
                component={TabWalletScreen}
                options={{ headerTitle: "Tab wallet Title" }}
            />
        </TabWalletStack.Navigator>
    );
}

const TabMinerStack = createStackNavigator();

function TabMinerNavigator() {
    return (
        <TabMinerStack.Navigator>
            <TabMinerStack.Screen
                name="TanMinerScreen"
                component={TabMinerScreen}
                options={{ headerTitle: "Tab Miner Title" }}
            />
        </TabMinerStack.Navigator>
    );
}

const TabSettingStack = createStackNavigator();

function TabSettingNavigator() {
    return (
        <TabSettingStack.Navigator>
            <TabSettingStack.Screen
                name="TabSettingScreen"
                component={TabSettingScreen}
                options={{ headerTitle: "Tab setting Titles" }}
            />
        </TabSettingStack.Navigator>
    );
}