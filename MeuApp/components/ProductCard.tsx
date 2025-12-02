// components/ProductCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../types/product";
import AntDesign from "@expo/vector-icons/AntDesign"; // ✔ IMPORT CORRETO
import { useFavorites } from "../hooks/useFavorites";

export default function ProductCard({
  product,
  onPress,
}: {
  product: Product;
  onPress?: () => void;
}) {
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <View style={styles.card}>
      {/* Botão de Favorito */}
      <TouchableOpacity
        style={styles.favoriteBtn}
        onPress={() => toggleFavorite(product)}
      >
        <AntDesign
          name={isFavorite(product.id) ? "heart" : "hearto"} 
          size={20}
          color={isFavorite(product.id) ? "red" : "black"}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.clickArea} onPress={onPress}>
        <Image source={product.image} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name}>{product.name}</Text>

          <View style={styles.scoreBox}>
            <Text style={styles.score}>{product.score}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    borderRadius: 12,
    padding: 10,
    backgroundColor: "#fff",
    marginRight: 14,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    position: "relative",
  },

  clickArea: {
    width: "100%",
    alignItems: "center",
  },

  favoriteBtn: {
    position: "absolute",
    right: 8,
    top: 8,
    zIndex: 5,
  },

  image: {
    width: 90,
    height: 110,
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
