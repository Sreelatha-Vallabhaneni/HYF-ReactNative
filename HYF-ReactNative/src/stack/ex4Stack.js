import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ex4 from "../components/ex4";

const stylingStack = createStackNavigator();

export default function ex4Stack() {
  return (
    <stylingStack.Navigator>
      <stylingStack.Screen name="Custom Component" component={ex4} />
    </stylingStack.Navigator>
  );
}
