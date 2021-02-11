import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";


function Hello() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ fontWeight: "500" }}>Hello, world!</Text>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    backgroundColor: "#63dff7",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Hello;