import React, { useState } from "react";
import { View, Button, Text, Platform, TouchableOpacity, StyleSheet } from "react-native";

// Web: Use browser SpeechRecognition API
const useSpeechRecognitionWeb = (onResult) => {
  const [listening, setListening] = useState(false);

  const startListening = () => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    setListening(true);
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onResult(text);
      setListening(false);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  };

  return { listening, startListening };
};

export default function VoiceInput({ onResult }) {
  if (Platform.OS === "web") {
    const { listening, startListening } = useSpeechRecognitionWeb(onResult);
    return (
      <View style={styles.voiceRow}>
        <TouchableOpacity style={styles.voiceBtn} onPress={startListening} disabled={listening}>
          <Text style={styles.voiceBtnText}>
            {listening ? "Listening..." : "🎤 Voice Search"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 8 }}>
      <Text style={{ color: "#90a4ae", fontSize: 13 }}>Voice input is only available on web.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  voiceRow: {
    marginBottom: 6,
    alignItems: "flex-end",
  },
  voiceBtn: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 15,
    marginTop: 2,
    marginBottom: 6,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#dbeafe",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  },
  voiceBtnText: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 0.2,
  },
});
