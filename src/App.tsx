import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./screens/WelcomeScreen";
import ClassroomDetailScreen from "./screens/ClassroomDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import AssignmentScreen from "./screens/AssignmentScreen";
import PeopleScreen from "./screens/PeopleScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen
          name="ClassroomDetail"
          component={ClassroomDetailScreen}
        />
        <Stack.Screen name="Assignment" component={AssignmentScreen} />
        <Stack.Screen name="People" component={PeopleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
