import { useState } from "react";
import { View, TextInput, ScrollView, StyleSheet, Text } from "react-native";
import { useProducts } from "../../hooks/useProducts";
import ProductCard from "../../components/ProductCard";

export default function SearchScreen() {
  const [query, setQuery] = useState("");
  const { products } = useProducts();

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        placeholder="Buscar produto..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView style={{ padding: 20 }}>
        {results.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}

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
  empty: { textAlign: "center", opacity: 0.6, marginTop: 20 },
});
