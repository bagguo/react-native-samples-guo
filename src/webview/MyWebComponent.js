import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

class MyWebComponent extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <WebView style={{ flex: 1 }} source={{ uri: 'http://121.5.173.139:9800/' }} />
      </SafeAreaView>
    );
  }
}

export default MyWebComponent;