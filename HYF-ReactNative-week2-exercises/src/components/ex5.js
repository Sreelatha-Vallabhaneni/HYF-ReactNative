import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableHighlight, Alert } from 'react-native';


export default function Form() {
    const [input, setInput] = useState('');
    const onPressHandler = () => {
      return (
        input === ''
      ?
      (Alert.alert('Please enter your name'),[{text: 'OK'}])
      :
      Alert.alert(`Hello 🙋‍♀️ ${input}`), [{ text: "OK"}]
      )
    }
  


    return (
      <View style={{ height: "25%", justifyContent: "space-around", alignItems:'center' }}>
        <Text style={styles.label}>What is your name?</Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="John Doe"
          placeholderTextColor="#7d7a7d"
          clearTextOnFocus={true}
          autoCapitalize={'words'}          
        />
        <TouchableHighlight  underlayColor="#fcba03" onPress={onPressHandler}>
          <Text style={styles.btn}>Say Hello</Text>
        </TouchableHighlight>
      </View>
    );
    
}

const styles = StyleSheet.create({
  label: {
    fontWeight: "800",
    fontSize: 18,
    margin: 20,
    marginLeft: 20,
  },
  input: {
    height: 45,
    width: "90%",
    borderRadius: 8,
    backgroundColor: "#e6e1e6",
    paddingLeft: 20,
    fontWeight: "500",
  },
  btn: {
    fontSize: 20,
    color: "#4fbce3",
    fontWeight:'bold'
  },
});