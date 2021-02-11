import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

export default function CustomComponent() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "white", fontSize: 16 }}>Say hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: "white", fontSize: 16 }}>Say goodbye</Text>
        </TouchableOpacity>
      </View>
    );    
}

const styles = StyleSheet.create({
    container:{
        height:150,
        justifyContent:'space-around',
        alignItems:'center'
    },
    btn: {
        backgroundColor: 'red',
        height:50,
        width: 'auto',
        alignItems:'center',
        justifyContent:'center',
        padding:8,

    }
});