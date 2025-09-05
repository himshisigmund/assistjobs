import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import JobList from './components/JobList';
import VoiceInput from './components/VoiceInput';

export default function App() {
  return (
    <View style={styles.container}>
      <JobList />
      <VoiceInput />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
