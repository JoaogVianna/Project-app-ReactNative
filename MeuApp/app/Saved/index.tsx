import { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import ProductCard from "../../components/ProductCard";
import { useFavorites } from "../../hooks/useFavorites";
import { LinearGradient } from "expo-linear-gradient";

export default function FavoritesScreen() {
  const { favorites, loading } = useFavorites();
  const [search, setSearch] = useState("");

  if (loading) {
    return (
      <View style={styles.center}>
        <Text style={styles.loading}>Carregando...</Text>
      </View>
    );
  }

  // 🔍 FILTRO CORRIGIDO (usa name ao invés de title)
  const filtered = favorites.filter((fav) =>
    fav.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <LinearGradient
      colors={["#4CAF50", "#2E7D32"]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Favoritos</Text>

        {/* 🔍 Busca */}
        <TextInput
          style={styles.search}
          placeholder="Buscar favorito..."
          placeholderTextColor="#cce8d0"
          value={search}
          onChangeText={setSearch}
        />

        {/* Caso vazio */}
        {filtered.length === 0 && (
          <Text style={styles.empty}>Nenhum favorito encontrado.</Text>
        )}

        {/* Grid */}
        <View style={styles.grid}>
          {filtered.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 0.5,
  },

  search: {
    backgroundColor: "rgba(255,255,255,0.18)",
    padding: 14,
    borderRadius: 14,
    color: "#fff",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.25)",
  },

  empty: {
    textAlign: "center",
    marginTop: 40,
    color: "#fff",
    opacity: 0.8,
    fontSize: 16,
  },

  loading: {
    fontSize: 18,
    color: "#fff",
  },

  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2E7D32",
  },

  grid: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
});
