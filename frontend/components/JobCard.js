import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function JobCard({ job }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>{job.location}</Text>
      {/* Optionally add more fields like description, salary, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  title: { fontWeight: "bold", fontSize: 18 },
  company: { color: "#444", marginTop: 2 },
  location: { color: "#888", marginTop: 2 },
});
