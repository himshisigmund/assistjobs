import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function JobList({ jobs }) {
  const renderItem = ({ item }) => (
    <View style={styles.jobCard}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.company} — {item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Job Results</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>No jobs found.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 24 },
  heading: { fontSize: 18, fontWeight: "bold", marginBottom: 8 },
  jobCard: { padding: 12, borderWidth: 1, borderColor: "#eee", borderRadius: 5, marginBottom: 10 },
  title: { fontWeight: "bold" },
});
