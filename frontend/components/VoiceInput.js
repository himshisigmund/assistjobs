import React, { useState } from "react";
import { View, Button, Text, Platform } from "react-native";

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
      <View style={{ marginTop: 32 }}>
        <Text style={{ fontWeight: "bold" }}>Voice Search (Web Only)</Text>
        <Button title={listening ? "Listening..." : "Start Voice Input"} onPress={startListening} disabled={listening} />
      </View>
    );
  }

  return (
    <View style={{ marginTop: 32 }}>
      <Text style={{ color: "gray" }}>Voice input not implemented on mobile yet.</Text>
    </View>
  );
}
