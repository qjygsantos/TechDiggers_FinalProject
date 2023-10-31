// MeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const MeScreen = ({ navigation }) => {
  const handleLogOut = () => {
    // Handle the log out logic here (e.g., clearing user session, etc.)

    // After log out, navigate to the "Welcome" screen
    navigation.navigate('Welcome');
  };

  return (
    <View>
      <Text>Me Screen</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

export default MeScreen;
