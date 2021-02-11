import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ex1 from "./stack/ex1Stack";
import ex2 from './stack/ex2Stack';
import ex3 from "./stack/ex3Stack";
import ex4 from "./stack/ex4Stack";
import ex5 from './stack/ex5Stack';
import ex6 from './stack/ex6Stack';


const Tab = createBottomTabNavigator();

export default function  TabNav() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 15,
            fontWeight: "bold",
          },
          labelPosition: "beside-icon",
          //activeBackgroundColor: "lightgrey",
          style: { backgroundColor: "pink" },
        }}
      >
        <Tab.Screen name="Ex1" component={ex1} />
        <Tab.Screen name="Ex2" component={ex2} />
        <Tab.Screen name="Ex3" component={ex3} />
        <Tab.Screen name="Ex4" component={ex4} />
        <Tab.Screen name="Ex5" component={ex5} />
        <Tab.Screen name="Ex6" component={ex6} />
      </Tab.Navigator>
    );
    
}