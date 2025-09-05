import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ErrorMessage({ message }) {
  if (!message) return null;
  return (
    <View style={styles.errorBox}>
      <Text style={styles.errorText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorBox: {
    backgroundColor: "#ffeef0",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#feb2b2",
  },
  errorText: {
    color: "#b91c1c",
    fontWeight: "bold",
    fontSize: 15,
  },
});
