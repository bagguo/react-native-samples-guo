import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";
import OpenWeatherMap from "./open_weather_map";
import Forecast from "./Forecast";

class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = {zip: "", foreast: null};
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(foreast => {
            this.setState({foreast: foreast});
        });
    };

    render() {
        let content = null;
        if(this.state.foreast != null) {
            content = (
                <Forecast
                main={this.state.foreast.main}
                description={this.state.foreast.description}
                temp={this.state.foreast.temp}
                />
            );
        }

        return (
            <View style={StyleSheet.container}>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                {content}
                <TextInput
                style={styles.input}
                onSubmitEditing={this._handleTextChange}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#666666"
    },
    welcome: {fontSize:20, textAlign:"center", margin:10},
    input: {
        fontSize:20,
        borderWidth:2,
        padding:2,
        height:40,
        width:100,
        textAlign:"center"
    }
});
export default WeatherProject;