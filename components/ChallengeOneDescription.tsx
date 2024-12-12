import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

const ChallengeOneDescription = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Coding Challenge: Pokémon Generationen Explorer
      </Text>

      <Text style={styles.subHeader}>Zielsetzung:</Text>
      <Text style={styles.text}>
        Erstelle eine Komponente, die die Pokémon-Generationen von der PokeAPI
        lädt und diese Daten in einer `SectionList` darstellt. Jedes
        Listenelement soll anklickbar sein und auf einen Detailbildschirm
        verweisen, der weitere Informationen zur gewählten Pokémon-Generation
        anzeigt.
      </Text>

      <Text style={styles.subHeader}>Aufgabenstellung:</Text>
      <Text style={styles.text}>
        1. **API Daten Laden** - Verwende die Fetch API, um die Daten von der
        PokeAPI zu laden und speichere diese im State der App.
      </Text>
      <Text style={styles.text}>
        2. **Darstellung der Daten** - Verwende eine `SectionList`, um die
        Pokémon-Generationen anzuzeigen. Jede Generation sollte als ein
        anklickbares Element in der Liste erscheinen.\n
      </Text>
      <Text style={styles.text}>
        3. **Navigation und Detailansicht** - Implementiere eine einfache
        Navigation, die den Benutzer zum Detailbildschirm der ausgewählten
        Generation führt.
      </Text>

      <Text style={styles.subHeader}>Benötigte Elemente:</Text>
      <Text style={styles.code}>{`
        Netzwerkanfrage: fetch()-API \n
        React Hooks: useState(), useEffect() \n
        Expo Navigation: Stack.Navigator, Stack.Screen, Expo App Router \n
        React Native Komponenten: u.a SectionList, TouchableOpacity \n
      `}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  code: {
    fontFamily: "monospace",
    fontSize: 14,
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
  },
});

export default ChallengeOneDescription;
