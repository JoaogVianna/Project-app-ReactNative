import { useLocalSearchParams, router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const yogurtSub = [
  "Tipo grego", "Funcionais", "Natural integral", "Com sabor",
  "Proteicos", "Alternativas sem leite", "Tamanho família",
  "Orgânico", "Zera lactose", "Natural desnatado"
];

export default function Subcategories() {
  const { categoryId } = useLocalSearchParams();

  return (
    <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={styles.container}>
      <Text style={styles.title}>{categoryId}</Text>

      <FlatList
        data={yogurtSub}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.subCard}
            onPress={() => router.push(`/Products?item=${item}`)}
          >
            <LinearGradient
              colors={["#A5D6A7", "#81C784"]}
              style={styles.cardInner}
            >
              <Text style={styles.subText}>{item}</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },

  subCard: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 14,
    overflow: "hidden",
  },

  cardInner: {
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderRadius: 14,
    elevation: 3,
  },

  subText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#1B5E20",
    textAlign: "center",
  },
});
