import React from 'react';
import {Text, StyleSheet, Alert, Button } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function AlertMsg(){
  const pressHandler = () =>
    Alert.alert("Alert", "hello!", [
      { text: "OK", onPress: () => console.log("OK") },
    ]);
    return (
      <Button title="Button 1" onPress={pressHandler} />  
    );
}