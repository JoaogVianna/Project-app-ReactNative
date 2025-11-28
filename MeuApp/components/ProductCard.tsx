import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface ProductCardProps {
  name: string;
  score: number;
  image: any;
  onPress?: () => void;
}

export default function ProductCard({ name, score, image, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.scoreBox}>
          <Text style={styles.score}>{score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 110,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 85,
    height: 110,
    alignSelf: "center",
    marginBottom: 8,
  },
  info: {
    alignItems: "center",
  },
  name: {
    fontSize: 13,
    fontWeight: "600",
  },
  scoreBox: {
    marginTop: 6,
    backgroundColor: "#E8FFE9",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  score: {
    color: "#2BBE5F",
    fontWeight: "bold",
  },
});
