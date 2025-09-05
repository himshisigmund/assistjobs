import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import JobCard from "./JobCard";

export default function JobList({ jobs = [] }) {
  const renderItem = ({ item }) => <JobCard job={item} />;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{jobs.length > 0 ? "Job Results" : "No jobs found."}</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 18, flex: 1 },
  heading: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#384b63",
    letterSpacing: 0.2,
    textAlign: "left",
  },
});
