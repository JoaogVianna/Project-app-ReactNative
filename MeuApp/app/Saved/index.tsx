import { View, Text, ScrollView, StyleSheet } from "react-native";
import ProductCard from "../../components/ProductCard";
import { useFavorites } from "../../hooks/useFavorites";

export default function FavoritesScreen() {
  const { favorites, loading } = useFavorites();

  if (loading) {
    return <Text style={styles.loading}>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>

      {favorites.length === 0 && (
        <Text style={styles.empty}>Nenhum favorito ainda.</Text>
      )}

      <View style={styles.grid}>
        {favorites.map((prod) => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  empty: {
    textAlign: "center",
    marginTop: 20,
    opacity: 0.6,
  },
  loading: {
    marginTop: 50,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
