import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ex2 from "../components/ex2";

const captureStack = createStackNavigator();

export default function ex2Stack() {
  return (
    <captureStack.Navigator>
      <captureStack.Screen name="Capturing Taps" component={ex2} />
    </captureStack.Navigator>
  );
}
