import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity, Platform } from "react-native";

export default function JobCard({ job }) {
  // Remotive API fields; adjust if using a different API
  const {
    title,
    company_name,
    candidate_required_location,
    description = "",
    url,
    job_type,
    publication_date,
  } = job;

  // Strip HTML tags from description for preview
  const cleanDesc = description.replace(/<[^>]+>/g, "");

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.jobTitle}>{title}</Text>
        {job_type ? <Text style={styles.jobType}>{job_type}</Text> : null}
      </View>
      <Text style={styles.company}>{company_name}</Text>
      <Text style={styles.location}>{candidate_required_location}</Text>
      <Text style={styles.date}>{publication_date ? new Date(publication_date).toLocaleDateString() : ""}</Text>
      <Text style={styles.desc} numberOfLines={3}>{cleanDesc}</Text>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
        activeOpacity={0.85}
      >
        <Text style={styles.applyBtnText}>View Job</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: Platform.OS === "web" ? 0.08 : 0.18,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 5,
    borderWidth: 1,
    borderColor: "#f0f4f8",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 2,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    flex: 1,
    flexWrap: "wrap",
  },
  jobType: {
    backgroundColor: "#e0e7ff",
    color: "#3730a3",
    fontWeight: "700",
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    overflow: "hidden",
    marginLeft: 8,
  },
  company: {
    color: "#2563eb",
    fontWeight: "600",
    fontSize: 16,
    marginTop: 2,
  },
  location: {
    color: "#64748b",
    fontSize: 14,
    marginBottom: 2,
  },
  date: {
    color: "#94a3b8",
    fontSize: 12,
    marginBottom: 8,
  },
  desc: {
    fontSize: 14,
    color: "#475569",
    marginTop: 2,
    marginBottom: 12,
    lineHeight: 18,
  },
  applyBtn: {
    backgroundColor: "#1570ef",
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: "flex-start",
    paddingHorizontal: 20,
    shadowColor: "#1570ef",
    shadowOpacity: 0.17,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginTop: 4,
  },
  applyBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 0.6,
  },
});
