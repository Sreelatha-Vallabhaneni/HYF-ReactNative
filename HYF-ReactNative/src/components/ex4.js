import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function StylingSquares() {
    return (
      <View style={[styles.container, styles.center]}>
        <View style={[styles.square, styles.center, {backgroundColor: "#6efabd"}]}>
          <Text>Square 1</Text>
        </View>
        <View style={[styles.square, styles.center, {backgroundColor: "#6ef8fa"}]}>
          <Text>Square 2</Text>
        </View>
        <View style={[styles.square, styles.center, {backgroundColor: "#f5b8ec"}]}>
          <Text>Square 3</Text>
        </View>
      </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  square: {
    width: 100,
    height: 100,
    margin: 15
  },
  center: {
    justifyContent: "center",
    alignItems: "center",  },
});