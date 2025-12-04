// app/index.tsx
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import CategoryCard from "../components/CategoryCard";

const categories = [
  {
    id: "salgadinho",
    title: "Salgadinho",
    color: "#58D38C",
    image: require("../assets/imagens/icons/snack.png"),
  },
  {
    id: "biscoito-salgado",
    title: "Biscoito Salgado",
    color: "#44B774",
    image: require("../assets/imagens/icons/cracker.png"),
  },
  {
    id: "chocolate",
    title: "Chocolate",
    color: "#C46257",
    image: require("../assets/imagens/icons/choco.png"),
  },
];

export default function Home() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#E9F7EF" }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60 }}
    >
      {/* 🌿 GRADIENTE DE FUNDO DO HEADER */}
      <LinearGradient
        colors={["#7BE495", "#4CAF50", "#1E8C3F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>NutriLife</Text>
        <Text style={styles.headerSubtitle}>
          Explore os alimentos com clareza e equilíbrio.
        </Text>
      </LinearGradient>

      {/* CARD COM GRADIENTE SUAVE */}
      <LinearGradient
        colors={["#FFFFFF", "#F4FFF8"]}
        style={styles.recommendCard}
      >
        <Text style={styles.recommendTitle}>Recomendação de Hoje</Text>
        <Text style={styles.recommendText}>
          Prefira snacks com fibras e baixo teor de sódio para manter a saciedade
          e melhorar sua energia.
        </Text>

        <LinearGradient
          colors={["#A6F5C2", "#7BE495"]}
          style={styles.recommendHighlight}
        />
      </LinearGradient>

      {/* CATEGORIAS */}
      <Text style={styles.sectionTitle}>Categorias de Snacks</Text>

      <View style={styles.grid}>
        {categories.map((item) => (
          <LinearGradient
            key={item.id}
            colors={[item.color + "AA", item.color]}
            style={styles.cardWrapper}
          >
            <CategoryCard
              title={item.title}
              color={item.color}
              image={item.image}
              onPress={() => router.push(`/${item.id}`)}
            />
          </LinearGradient>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerGradient: {
    paddingTop: 60,
    paddingHorizontal: 28,
    paddingBottom: 40,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 6,
  },

  headerTitle: {
    fontSize: 36,
    fontWeight: "900",
    color: "#FFFFFF",
    letterSpacing: -1,
  },

  headerSubtitle: {
    fontSize: 17,
    color: "#E0FFE8",
    marginTop: 6,
    lineHeight: 22,
    maxWidth: 300,
  },

  recommendCard: {
    margin: 25,
    padding: 24,
    borderRadius: 22,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
    position: "relative",
    overflow: "hidden",
  },

  recommendTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2F6B3A",
    marginBottom: 10,
  },

  recommendText: {
    color: "#497B54",
    fontSize: 15,
    lineHeight: 21,
  },

  // brilho no card
  recommendHighlight: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 200,
    right: -40,
    top: -40,
    opacity: 0.35,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginLeft: 25,
    marginBottom: 18,
    marginTop: 10,
    color: "#244A2A",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 25,
    justifyContent: "space-between",
    rowGap: 22,
  },

  cardWrapper: {
    width: "47%",
    borderRadius: 18,
    padding: 2,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
});
