import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function ReportIncidentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/falcon_logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Report Your Incident</Text>
      <Text style={styles.required}>*required</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter E-ID Number or Phone no. *"
      />
      <Text style={styles.label}>Description of the crime *</Text>
      <TextInput
        style={styles.textarea}
        multiline
      />
      <TouchableOpacity style={styles.mediaButton} onPress={() => navigation.navigate('ChooseMedia')}>
        <Text style={styles.mediaButtonText}>Choose Media</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  required: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  textarea: {
    width: '100%',
    height: 150,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    textAlignVertical: 'top',
  },
  mediaButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 25,
    alignItems: 'center',
  },
  mediaButtonText: {
    fontSize: 16,
    color: '#000',
  },
  submitButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#28a745',
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
