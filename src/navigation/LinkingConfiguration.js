import * as Linking from "expo-linking";

export default {
    prefixes: [Linking.createURL("/")],
    config: {
        screens: {
            Root: {
                screens: {
                    TabHome: {
                        screens: {
                            TabHomeScreen: "Wallet",
                        },
                    },

                    TabMiner: {
                        screens: {
                            TabMinerScreen: "Miner",
                        },
                    },

                    TabSetting: {
                        screens: {
                            TabSettingScreen: "Setting",
                        },
                    },
                },
            },
            NotFound: "*",
        },
    },
};