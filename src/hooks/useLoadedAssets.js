import React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import Ionicons from "@expo/vector-icons/Ionicons";

export function useLoadedAssets() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                //防止自动隐藏
                SplashScreen.preventAutoHideAsync();

                //load fonts
                await Font.loadAsync(Ionicons.font);
            } catch (e) {
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}