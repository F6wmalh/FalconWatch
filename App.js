import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/falcon_logo.png')} style={styles.logo} />
        <Text style={styles.title}>Falcon Watch</Text>
        <Text style={styles.subtitle}>حارس الصقر</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="+971 50 000 0000"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
      />
      <TextInput
        style={styles.input}
        placeholder="*********"
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uaePassButton}>
        <Text style={styles.uaePassButtonText}>Sign in with UAE PASS</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  loginButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#28a745',
    borderRadius: 25,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  uaePassButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#000',
    borderRadius: 25,
    alignItems: 'center',
  },
  uaePassButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007bff',
    marginTop: 10,
  },
});
