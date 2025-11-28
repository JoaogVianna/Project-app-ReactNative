// app/Products/index.tsx
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Product() {
  const { item } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/imagens/icons/yogurt.png")}
        style={styles.productImg}
      />

      <Text style={styles.score}>100</Text>
      <Text style={styles.title}>{item}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pontos positivos</Text>

        <Text>✔ Clean label</Text>
        <Text>✔ Açúcar adicionado: 0g</Text>
        <Text>✔ Proteínas: 4.1g</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flex: 1 },
  productImg: { width: 120, height: 160, alignSelf: "center" },
  score: { fontSize: 40, fontWeight: "bold", color: "#1DB954", textAlign: "center", marginVertical: 10 },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  section: { marginTop: 20 },
  sectionTitle: { fontWeight: "bold", fontSize: 18, marginBottom: 10 },
});
