import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

interface SubcategoryCardProps {
  title: string;
  onPress?: () => void;
}

export default function SubcategoryCard({ title, onPress }: SubcategoryCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    backgroundColor: "#FFEAD9",
    padding: 14,
    borderRadius: 12,
    minHeight: 80,
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#5A3D2B",
  },
});
