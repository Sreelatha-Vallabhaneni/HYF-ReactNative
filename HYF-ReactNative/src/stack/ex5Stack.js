import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ex5 from "../components/ex5";

const formStack = createStackNavigator();

export default function ex5Stack() {
  return (
    <formStack.Navigator>
      <formStack.Screen name="Custom Component" component={ex5} />
    </formStack.Navigator>
  );
}
