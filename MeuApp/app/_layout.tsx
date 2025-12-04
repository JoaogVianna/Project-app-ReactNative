// app/_layout.tsx
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#cfe9d3",
        tabBarStyle: {
          backgroundColor: "#2E7D32",
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="search-outline"
              size={focused ? size + 6 : size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Scan"
        options={{
          title: "Escanear",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="barcode-outline"
              size={focused ? size + 6 : size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Saved"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "bookmark" : "bookmark-outline"}
              size={focused ? size + 6 : size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
