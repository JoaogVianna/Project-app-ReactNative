// app/index.tsx
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    id: "salgadinho",
    title: "Salgadinho",
    color: "#4CAF50",
    image: require("../assets/imagens/icons/snack.png"),
  },
  {
    id: "biscoito-salgado",
    title: "Biscoito Salgado",
    color: "#2E8B57",
    image: require("../assets/imagens/icons/cracker.png"),
  },
  {
    id: "chocolate",
    title: "Chocolate",
    color: "#C14444",
    image: require("../assets/imagens/icons/choco.png"),
  },
];

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lanches e Snacks populares</Text>

      <View style={styles.grid}>
        {categories.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            color={item.color}
            image={item.image}
            onPress={() => router.push(`/${item.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  title: { fontWeight: "bold", fontSize: 18, marginBottom: 15 },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
