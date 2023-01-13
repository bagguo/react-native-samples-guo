
import React, { useState } from 'react';//导入state
import { Text, TextInput, View } from 'react-native';


//-------TextInput--------
/**
 * 两个callback: onChangeText \ onSubmitEditing
 */
const PizzaTranslator = () => {
    const [text, setText] = useState('');
    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type here to translate, 试试文字中间键入空格"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {text.split(' ').map((word) => word && '🍕').join(' ')}
            </Text>
        </View>
    );
}

export default PizzaTranslator;