// WelcomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the "Login" screen when the "Login" button is pressed.
    navigation.navigate('Login');
  };

  const handleSignUp = () => {
    // Navigate to the "SignUp" screen when the "Sign Up" button is pressed.
    navigation.navigate('SignUp');
  };

  return (
    <View>
      <Text>Welcome to Your App</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default WelcomeScreen;
