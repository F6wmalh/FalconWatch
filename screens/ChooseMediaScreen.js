import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native';

export default function ChooseMediaScreen({ navigation }) {
  const [cameraEnabled, setCameraEnabled] = React.useState(false);
  const [audioEnabled, setAudioEnabled] = React.useState(false);
  const [uploadEnabled, setUploadEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/falcon_logo.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Choose Media</Text>
      <Text style={styles.label}>Location</Text>
      <Image source={require('../assets/dubai_map.png')} style={styles.map} />
      <Text style={styles.optionsTitle}>Please select the options</Text>
      <View style={styles.option}>
        <Image source={require('../assets/camera_icon.png')} style={styles.icon} />
        <Text style={styles.optionText}>Camera</Text>
        <Switch value={cameraEnabled} onValueChange={setCameraEnabled} />
      </View>
      <View style={styles.option}>
        <Image source={require('../assets/audio_icon.png')} style={styles.icon} />
        <Text style={styles.optionText}>Audio</Text>
        <Switch value={audioEnabled} onValueChange={setAudioEnabled} />
      </View>
      <View style={styles.option}>
        <Image source={require('../assets/upload_icon.png')} style={styles.icon} />
        <Text style={styles.optionText}>Upload</Text>
        <Switch value={uploadEnabled} onValueChange={setUploadEnabled} />
      </View>
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('Confirmation')}>
        <Text style={styles.doneButtonText}>Done</Text>
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
  label: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  map: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  optionsTitle: {
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  doneButton: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#28a745',
    borderRadius: 25,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

