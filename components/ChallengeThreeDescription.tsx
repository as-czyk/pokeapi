import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ChallengeThreeDescription = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        Coding Challenge: Erweiterung der Pokémon-Details
      </Text>

      <Text style={styles.subHeader}>Zielsetzung:</Text>
      <Text style={styles.text}>
        Erweitere eine bestehende Anwendung, die Pokémon-Daten aus der PokeAPI
        abruft, um zusätzliche Informationen anzuzeigen und die Interaktivität
        der App zu erhöhen. Optional: Ergänze die Anwendung ebenfalls um eine
        Pokemon Team funktion. Der Nutze soll einzelne Pokemon zu einem Team
        hinzufügen können und sich sein Team in einem eigenen Menu anzeigen
        lassen können.
      </Text>

      <Text style={styles.subHeader}>Aufgaben :</Text>
      <Text style={styles.text}>
        1. Erweitere die Pokémon Detailansicht: Zeige zusätzliche Informationen
        in der Detailansicht jedes Pokémon an, wie z.B. Stats (Attack, Defense,
        etc.), Typen und Fähigkeiten. Nutze die vorhandene Implementierung der
        PokeApi und erweitere das Object (sowie die Typen) um die benötigten
        Infos abzurufen.
      </Text>
      <Text style={styles.text}>
        2. Füge eine Favoritenfunktion hinzu: Ermögliche es Benutzern, ihre
        Lieblingspokémon zu markieren und eine separate Liste ihrer Favoriten zu
        führen. Diese Funktionalität kann durch Zustandsmanagement in React
        (z.B. mit useState) realisiert werden.
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

export default ChallengeThreeDescription;
