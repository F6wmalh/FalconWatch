import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Falcon Watch</Text>
      <TextInput style={styles.input} placeholder="+971 50 000 0000" />
      <TextInput style={styles.input} placeholder="*********" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <Button title="Sign in with UAE PASS" onPress={() => {}} color="black" />
      <Text style={styles.forgotPassword}>Forgot Password?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '100%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 4,
  },
  forgotPassword: {
    marginTop: 16,
    color: 'blue',
  },
});

export default LoginScreen;
