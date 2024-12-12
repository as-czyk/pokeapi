import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ChallengeTwoDescription = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Coding Challenge: Refactor die Profilseite
      </Text>

      <Text style={styles.subHeader}>Zielsetzung:</Text>
      <Text style={styles.text}>
        Teile den überladenen JSX-Code in kleinere, wiederverwendbare
        Komponenten auf. Berücksichtige dabei die unterschiedlichen UI-Elemente
        wie Profilbild, Statistiken und die Liste der Lieblingspokemon. Erstelle
        spezifische Komponenten für das Profilbild, die Statistiken, und die
        Anzeige der Lieblingsbücher. Jede dieser Komponenten sollte ihre eigenen
        Props für die erforderlichen Daten erhalten.
      </Text>

      <Text style={styles.subHeader}>Hinweis:</Text>
      <Text style={styles.text}>
        1. Achte darauf, dass jede neue Komponente klar definierte Props hat und
        flexibel wiederverwendbar ist. Implementiere außerdem TypeScript
        Interfaces.
      </Text>
      <Text style={styles.text}>
        2. Überprüfe die Funktionalität und stelle sicher, dass der
        refaktorierte Bildschirm funktional identisch zum ursprünglichen
        Bildschirm ist.
      </Text>
      <Text style={styles.text}>
        3. Kommentiere den Code, um deine Designentscheidungen und die
        Aufteilung der Komponenten zu erklären.
      </Text>
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

export default ChallengeTwoDescription;
