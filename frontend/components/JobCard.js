import React from "react";
import { View, Text, StyleSheet, Linking, Button } from "react-native";

export default function JobCard({ job }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company_name}</Text>
      <Text style={styles.location}>{job.candidate_required_location}</Text>
      <Text numberOfLines={3} style={styles.desc}>{job.description.replace(/<[^>]+>/g, '')}</Text>
      <Button title="View Job" onPress={() => Linking.openURL(job.url)} />
    </View>
  );
}

const styles = StyleSheet.create({
  // ... as before ...
  desc: { marginTop: 6, color: "#555" },
});
