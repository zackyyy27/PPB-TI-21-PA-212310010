import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (    
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text style={styles.subtitle}>Nama: Muhammad zacky afiff</Text>
      <Text style={styles.subtitle}>Npm : 212310010</Text>
      <Text style={styles.subtitle}></Text>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});
