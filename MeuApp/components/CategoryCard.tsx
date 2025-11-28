import React from "react";
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

interface CategoryCardProps {
  title: string;
  color: string;
  image: any;
  onPress?: () => void;
}

export default function CategoryCard({ title, color, image, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Image source={image} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "47%",
    height: 95,
    borderRadius: 14,
    padding: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  icon: {
    width: 42,
    height: 42,
    alignSelf: "flex-end",
  },
});
