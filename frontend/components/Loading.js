import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#1570ef" />
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 28 },
});
