import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Platform } from "react-native";
import * as Speech from "expo-speech";
import JobList from "./components/JobList";
import VoiceInput from "./components/VoiceInput";

export default function App() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([
    { id: "1", title: "Frontend Developer", company: "Tech Co", location: "Remote" },
    { id: "2", title: "AI Researcher", company: "AI Labs", location: "San Francisco" },
  ]);
  const [ttsText, setTtsText] = useState("");

  const handleSearch = () => {
    alert(`Search for jobs: ${query}`);
  };

  const handleSpeak = () => {
    if (ttsText) {
      Speech.speak(ttsText);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Job Finder</Text>
      <TextInput
        style={styles.input}
        placeholder="Search jobs (e.g., React, AI)..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      <JobList jobs={jobs} />

      <View style={styles.ttsSection}>
        <Text style={styles.subTitle}>Text-to-Speech</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter text to read aloud"
          value={ttsText}
          onChangeText={setTtsText}
        />
        <Button title="Speak" onPress={handleSpeak} />
      </View>

      <VoiceInput onResult={setQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: "#fff", justifyContent: "flex-start" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 5, padding: 10, marginVertical: 8 },
  ttsSection: { marginTop: 32 },
  subTitle: { fontSize: 20, fontWeight: "600", marginTop: 16, marginBottom: 8 },
});
