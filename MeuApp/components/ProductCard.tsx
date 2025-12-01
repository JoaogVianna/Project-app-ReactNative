import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../types/product";

export default function ProductCard({
  product,
  onPress,
}: {
  product: Product;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={product.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>

        <View style={styles.scoreBox}>
          <Text style={styles.score}>{product.score}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 14,

    // sombra leve
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    elevation: 3, // Android
  },

  image: {
    width: 90,
    height: 110,
    alignSelf: "center",
    marginBottom: 8,
    resizeMode: "contain",
  },

  info: {
    alignItems: "center",
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
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
