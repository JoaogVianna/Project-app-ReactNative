// app/Products/index.tsx
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Product() {
  const { item } = useLocalSearchParams();

  return (
    <View style={styles.container}>

      {/* Card do produto */}
      <View style={styles.card}>
        <Image
          source={require("../../assets/imagens/icons/yogurt.png")}
          style={styles.productImg}
        />

        <View style={styles.scoreBadge}>
          <Text style={styles.score}>100</Text>
        </View>

        <Text style={styles.title}>{item}</Text>
      </View>

      {/* Seções nutricionais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pontos positivos</Text>

        <View style={styles.tag}>
          <Text style={styles.tagText}>✔ Clean label</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>✔ Açúcar adicionado: 0g</Text>
        </View>

        <View style={styles.tag}>
          <Text style={styles.tagText}>✔ Proteínas: 4.1g</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitleBad}>Pontos a melhorar</Text>

        <View style={styles.tagBad}>
          <Text style={styles.tagBadText}>⚠ Sódio moderado</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#F5FFF6",
  },

  /* CARD PRINCIPAL */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 25,
  },

  productImg: {
    width: 140,
    height: 180,
    marginBottom: 15,
    resizeMode: "contain",
  },

  scoreBadge: {
    backgroundColor: "#34C759",
    paddingHorizontal: 22,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 10,
  },

  score: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#1B5E20",
  },

  /* SEÇÕES */
  section: {
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1B5E20",
    marginBottom: 10,
  },

  sectionTitleBad: {
    fontSize: 20,
    fontWeight: "700",
    color: "#C62828",
    marginBottom: 10,
  },

  /* TAGS POSITIVAS */
  tag: {
    backgroundColor: "#E3F9E5",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },

  tagText: {
    color: "#1B5E20",
    fontSize: 16,
    fontWeight: "600",
  },

  /* TAGS NEGATIVAS */
  tagBad: {
    backgroundColor: "#FFE4E4",
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
  },

  tagBadText: {
    color: "#C62828",
    fontSize: 16,
    fontWeight: "600",
  },
});
