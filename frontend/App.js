import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import JobList from "./components/JobList";
import VoiceInput from "./components/VoiceInput";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import { fetchJobs } from "./utils/api";

export default function App() {
  const [query, setQuery] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    try {
      const realJobs = await fetchJobs(query);
      setJobs(realJobs);
    } catch (e) {
      setError(e.message || "Failed to fetch jobs");
    }
    setLoading(false);
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
      <ErrorMessage message={error} />
      {loading ? <Loading /> : <JobList jobs={jobs} />}
      <VoiceInput onResult={setQuery} />
    </View>
  );
}

const styles = StyleSheet.create({
  // ... as before ...
});
