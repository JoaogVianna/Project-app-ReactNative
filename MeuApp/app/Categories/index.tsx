import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCategories } from "../../hooks/useCategories";
import { router } from "expo-router";

export default function Categories() {
  const { categories } = useCategories();

  return (
    <LinearGradient
      colors={["#4CAF50", "#2E7D32"]}
      style={styles.container}
    >
      <Text style={styles.title}>Categorias Nutricionais</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View style={styles.grid}>

          {categories.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => router.push(`/Categories/${item.id}`)}
            >
              <LinearGradient
                colors={item.colors}
                style={styles.innerCard}
              >
                <Image source={item.image} style={styles.icon} />

                <Text style={styles.cardTitle}>{item.title}</Text>

                <Text style={styles.description} numberOfLines={2}>
                  {item.description}
                </Text>

                <View style={styles.tagContainer}>
                  {item.tags.slice(0, 2).map((tag, i) => (
                    <View key={i} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
              </LinearGradient>
            </TouchableOpacity>
          ))}

        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    paddingHorizontal: 18,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 22,
    textAlign: "center",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },

  card: {
    width: "46%",
    borderRadius: 18,
    overflow: "hidden",
  },

  innerCard: {
    padding: 16,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 180,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  icon: {
    width: 65,
    height: 65,
    marginBottom: 12,
    resizeMode: "contain",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 6,
    textAlign: "center",
  },

  description: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },

  tagContainer: {
    flexDirection: "row",
    gap: 6,
    flexWrap: "wrap",
    justifyContent: "center",
  },

  tag: {
    backgroundColor: "rgba(255,255,255,0.25)",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },

  tagText: {
    fontSize: 11,
    color: "#fff",
    fontWeight: "600",
  },
});
