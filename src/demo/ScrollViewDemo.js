
import React from 'react';
import { Text, Image, ScrollView } from 'react-native';


//-------ScrollView--------
//horizontal 滚动方向
const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
};

const App = () => (
    <ScrollView horizontal={false} pagingEnabled>
        <Text style={{ fontSize: 36 }}>Scroll me plz</Text>
        <Image source={logo} style={{ margin: 10 }} />
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Text style={{ fontSize: 36 }}>If you like</Text>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Text style={{ fontSize: 36 }}>If you like2</Text>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Text style={{ fontSize: 36 }}>If you like3                             </Text>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
        <Image source={logo} style={{ margin: 10 }}/>
    </ScrollView>
);

export default App;
