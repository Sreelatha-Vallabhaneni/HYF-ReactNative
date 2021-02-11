import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import hello from '../components/hello';

const helloStack = createStackNavigator();

export default function ex1Stack() {
  return (
    <helloStack.Navigator>
      <helloStack.Screen name="Hello World!" component={hello} />
    </helloStack.Navigator>
  );
}
