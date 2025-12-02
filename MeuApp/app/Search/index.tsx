import { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Text, Dimensions } from "react-native";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  // Retorna todos os produtos
  const { products } = useProducts();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  // ===== GRID =====
  const numColumns = 2; // quantidade de colunas
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns - 30;

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {results.length > 0 &&
          results.map((prod) => (
            <View key={prod.id} style={[styles.cardWrapper, { width: itemWidth }]}>
              <ProductCard product={prod} />
            </View>
          ))
        }

        {results.length === 0 && (
          <Text style={styles.empty}>Nenhum resultado.</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 14,
    backgroundColor: "#eee",
    margin: 16,
    borderRadius: 8,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },

  cardWrapper: {
    marginBottom: 20,
  },

  empty: {
    textAlign: "center",
    opacity: 0.6,
    marginTop: 20,
    width: "100%",
  },
});
