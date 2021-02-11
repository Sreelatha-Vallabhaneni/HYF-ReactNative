import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ex6 from "../components/ex6";

const loginFormStack = createStackNavigator();

export default function ex6Stack() {
  return (
    <loginFormStack.Navigator>
      <loginFormStack.Screen
        name="Login Form"
        options={{ headerShown:false }}
        component={ex6}
      />
    </loginFormStack.Navigator>
  );
}
