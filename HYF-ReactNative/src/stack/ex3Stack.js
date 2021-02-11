import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ex3 from "../components/ex3";

const customStack = createStackNavigator();

export default function ex3Stack() {
  return (
    <customStack.Navigator>
      <customStack.Screen name="Custom Component" component={ex3} />
    </customStack.Navigator>
  );
}
