import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Platform, TouchableOpacity, Keyboard } from "react-native";
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
    Keyboard.dismiss();
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

  // Load jobs on first render (optional, can remove useEffect for search-only)
  // React.useEffect(() => { handleSearch(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Job Finder</Text>
      <Text style={styles.subtitle}>Discover your next opportunity</Text>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          placeholder="Search jobs (e.g., React, AI, Data)..."
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
          <Text style={styles.searchBtnText}>Search</Text>
        </TouchableOpacity>
      </View>
      <VoiceInput onResult={setQuery} />
      <ErrorMessage message={error} />
      {loading ? <Loading /> : <JobList jobs={jobs} />}
      <Text style={styles.footer}>Powered by Remotive API • Copilot Design</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 48,
    paddingHorizontal: 16,
    backgroundColor: "#f5f8fc",
    minHeight: "100vh",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    letterSpacing: -1,
    color: "#0c2340",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    color: "#4b5c6b",
    fontSize: 18,
    marginBottom: 24,
    textAlign: "center",
    fontWeight: "500",
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchBtn: {
    backgroundColor: "#1570ef",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: "#1570ef",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  searchBtnText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 28,
    marginBottom: 12,
    textAlign: "center",
    color: "#aec1d0",
    fontSize: 13,
  },
});
