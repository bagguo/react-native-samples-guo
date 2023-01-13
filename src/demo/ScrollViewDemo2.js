
import React, { useState } from 'react';//导入state
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, FlatList, SectionList } from 'react-native';


const App = () => {
  return (
    <ScrollView>
      <Text style={{fontSize:30}}>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}  
          style={{width:200, height:200}}
        />
      </View>
      <TextInput
        style={{
          height:40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;