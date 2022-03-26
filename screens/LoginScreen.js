import React from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
