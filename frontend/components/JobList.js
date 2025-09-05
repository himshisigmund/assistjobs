import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import JobCard from "./JobCard";

export default function JobList({ jobs }) {
  const renderItem = ({ item }) => <JobCard job={item} />;

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
});
