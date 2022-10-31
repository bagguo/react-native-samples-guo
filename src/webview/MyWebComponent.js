import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
class MyWebComponent extends Component {
  render() {
    // return <WebView source={{ uri: 'https://reactnative.dev/' }} />;
    return <WebView source={{ uri: 'http://121.5.173.139:9801/' }} />;
  }
}

export default MyWebComponent;