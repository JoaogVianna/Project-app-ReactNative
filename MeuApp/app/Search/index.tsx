import { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const { products } = useProducts();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const numColumns = 2;
  const screenWidth = Dimensions.get("window").width;
  const itemWidth = screenWidth / numColumns - 32;

  return (
    <LinearGradient
      colors={["#4CAF50", "#2E7D32"]}
      style={{ flex: 1, paddingTop: 20 }}
    >
      <View style={styles.headerBox}>
        <Text style={styles.headerTitle}>Pesquisar</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        placeholderTextColor="#c8e6c9"
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView contentContainerStyle={styles.gridContainer}>
        {results.length > 0 &&
          results.map((prod) => (
            <View key={prod.id} style={[styles.cardWrapper, { width: itemWidth }]}>
              <ProductCard product={prod} />
            </View>
          ))}

        {results.length === 0 && (
          <Text style={styles.empty}>Nenhum resultado encontrado.</Text>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerBox: {
    paddingHorizontal: 20,
    marginBottom: 6,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },

  input: {
    padding: 14,
    backgroundColor: "rgba(255,255,255,0.15)",
    marginHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
    color: "white",
    marginBottom: 12,
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingBottom: 40,
  },

  cardWrapper: {
    marginBottom: 20,
  },

  empty: {
    textAlign: "center",
    opacity: 0.85,
    marginTop: 40,
    width: "100%",
    color: "white",
    fontSize: 16,
  },
});
