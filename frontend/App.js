// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import MainScreen from './MainScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }} // Show the header for the "Welcome" screen
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: true }} // Show the header for the "Login" screen
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: true }} // Show the header for the "SignUp" screen
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }} // Hide the header for the "Main" screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
