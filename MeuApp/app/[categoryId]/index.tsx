// app/[categoryId]/index.tsx
import { useLocalSearchParams, router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const yogurtSub = [
  "Tipo grego", "Funcionais", "Natural integral", "Com sabor",
  "Proteicos", "Alternativas sem leite", "Tamanho família",
  "Orgânico", "Zera lactose", "Natural desnatado"
];

export default function Subcategories() {
  const { categoryId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryId}</Text>

      <View style={styles.grid}>
        {yogurtSub.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.subCard}
            onPress={() => router.push(`/Products?item=${item}`)}
          >
            <Text style={styles.subText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  subCard: {
    width: "47%",
    backgroundColor: "#FFE8D2",
    padding: 15,
    borderRadius: 10,
  },
  subText: { fontWeight: "bold", fontSize: 16 },
});
