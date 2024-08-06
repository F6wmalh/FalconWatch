import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function ConfirmationScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/falcon_logo.png')} style={styles.logo} />
      </View>
      <Image source={require('../assets/checkmark.png')} style={styles.checkmark} />
      <Text style={styles.thankYouText}>Thank You For Reporting The Incident</Text>
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  checkmark: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  thankYouText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
  doneButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
